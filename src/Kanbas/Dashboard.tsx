// import React from "react";
// import { Link } from "react-router-dom";
// import * as db from "./Database";
// import { useSelector } from "react-redux";

// export default function Dashboard(
//     { courses, course, setCourse, addNewCourse,
//         deleteCourse, updateCourse }: {
//             courses: any[]; course: any;
//             setCourse: (course: any) => void;
//             addNewCourse: () => void;
//             deleteCourse: (course: any) => void;
//             updateCourse: () => void;
//         }) {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const { enrollments } = db;

//     // Determine if the current user is a faculty member
//     const isFaculty = currentUser.role === "FACULTY";

//     // If the user is faculty, show all courses; otherwise, show only enrolled courses
//     const displayedCourses = isFaculty
//         ? courses
//         : courses.filter((course) =>
//             enrollments.some(
//                 (enrollment) =>
//                     enrollment.user === currentUser._id &&
//                     enrollment.course === course._id
//             )
//         );

//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             {isFaculty && (
//                 <>
//                     <h5>New Course
//                         <button className="btn btn-primary float-end"
//                             id="wd-add-new-course-click"
//                             onClick={addNewCourse}> Add </button>
//                         <button className="btn btn-warning float-end me-2"
//                             onClick={updateCourse} id="wd-update-course-click">
//                             Update
//                         </button>
//                     </h5>
//                     <br />
//                     <input defaultValue={course.name} className="form-control mb-2"
//                         onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//                     <textarea defaultValue={course.description} className="form-control"
//                         onChange={(e) => setCourse({ ...course, description: e.target.value })} />
//                     <hr />
//                 </>
//             )}
//             <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
//             <div id="wd-dashboard-courses" className="row">
//                 <div className="row row-cols-1 row-cols-md-5 g-4">
//                     {displayedCourses.map((course) => (
//                         <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//                             <div className="card rounded-3 overflow-hidden">
//                                 <Link to={`/Kanbas/Courses/${course._id}/Home`}
//                                     className="wd-dashboard-course-link text-decoration-none text-dark">
//                                     <img src="/images/reactjs.jpg" width="100%" height={160} />
//                                     <div className="card-body">
//                                         <h5 className="wd-dashboard-course-title card-title">
//                                             {course.name} </h5>
//                                         <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                                             {course.description} </p>
//                                         <button className="btn btn-primary"> Go </button>
//                                         {isFaculty && (
//                                             <>
//                                                 <button onClick={(event) => {
//                                                     event.preventDefault();
//                                                     deleteCourse(course._id);
//                                                 }} className="btn btn-danger float-end"
//                                                     id="wd-delete-course-click">
//                                                     Delete
//                                                 </button>
//                                                 <button id="wd-edit-course-click"
//                                                     onClick={(event) => {
//                                                         event.preventDefault();
//                                                         setCourse(course);
//                                                     }}
//                                                     className="btn btn-warning me-2 float-end">
//                                                     Edit
//                                                 </button>
//                                             </>
//                                         )}
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enroll, unenroll } from "./store";

interface DashboardProps {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: any) => void;
    updateCourse: () => void;
}

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: DashboardProps) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const enrollments = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();
    const [showAllCourses, setShowAllCourses] = useState(false);

    const isFaculty = currentUser.role === "FACULTY";
    const isStudent = currentUser.role === "STUDENT" || currentUser.role === "TA";

    const toggleShowCourses = () => setShowAllCourses(!showAllCourses);
    const handleEnroll = (courseId: any) => dispatch(enroll({ user: currentUser._id, course: courseId }));
    const handleUnenroll = (courseId: any) => dispatch(unenroll({ user: currentUser._id, course: courseId }));

    const displayedCourses = isFaculty
        ? courses
        : courses.filter((course: { _id: any; }) =>
            showAllCourses ||
            enrollments.some((e: { user: any; course: any; }) => e.user === currentUser._id && e.course === course._id)
        );
    // const displayedCourses = (isFaculty || isStudent)
    //     ? courses.filter((course: { _id: any; }) =>
    //         enrollments.some((e: { user: any; course: any; }) => e.user === currentUser._id && e.course === course._id)
    //     )
    //     : [];


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {isFaculty && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}> Add </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <input defaultValue={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea defaultValue={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                </>
            )}
            {isStudent && (
                <button className="btn btn-primary float-end" onClick={toggleShowCourses}>
                    {showAllCourses ? "Show Enrolled Courses" : "Enroll Courses"}
                </button>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course: { _id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
                        const isEnrolled = enrollments.some((e: { user: any; course: any; }) => e.user === currentUser._id && e.course === course._id);
                        return (
                            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <img src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name} </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description} </p>
                                            <button className="btn btn-primary"> Go </button>
                                            {isFaculty && (
                                                <>
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                        Delete
                                                    </button>
                                                    <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end">
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </Link>
                                    {isStudent && (
                                        <button
                                            className={`btn ${isEnrolled ? "btn-danger" : "btn-success"}`}
                                            onClick={() => isEnrolled ? handleUnenroll(course._id) : handleEnroll(course._id)}
                                        >
                                            {isEnrolled ? "Unenroll" : "Enroll"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
