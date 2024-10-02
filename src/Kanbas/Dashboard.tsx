import React from "react";
import { Link } from "react-router-dom";

// export default function Dashboard() {
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//             <div id="wd-dashboard-courses" className="row">
//                 <div className="row row-cols-1 row-cols-md-5 g-4">
//                     <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//                         <div className="card">
//                             <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                                 to="/Kanbas/Courses/1234/Home">
//                                 <img src="/images/reactjs.jpg" width="100%" />
//                                 <div className="card-body">
//                                     <h5 className="wd-dashboard-course-title card-title">
//                                         CS1234 React JS
//                                     </h5>
//                                     <p className="card-text">
//                                         Full Stack software developer
//                                     </p>
//                                     <button className="btn btn-primary"> Go </button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="wd-dashboard-course col" style={{ width: "270px" }}>...</div>
//                     <div className="wd-dashboard-course col" style={{ width: "270px" }}>...</div>
//                     <div className="wd-dashboard-course col" style={{ width: "270px" }}>...</div>
//                 </div>
//             </div></div>
//     );
// }

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height="200px" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="card-text">
                                        202430_2 Spring 2024 Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5678/Home">
                                <img src="/images/python.jpg" width="100%" height="200px" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5678 Python Programming
                                    </h5>
                                    <p className="card-text">
                                        202430_2 Spring 2024 Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/9101/Home">
                                <img src="/images/nodejs.jpg" width="100%" height="200px" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS9101 Node.js
                                    </h5>
                                    <p className="card-text">
                                        202430_2 Spring 2024 Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1121/Home">
                                <img src="/images/java.jpg" width="100%" height="200px" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1121 Java Programming
                                    </h5>
                                    <p className="card-text">
                                        202430_2 Spring 2024 Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/3141/Home">
                                <img src="/images/machinelearning.jpg" width="100%" height="200px" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3141 Machine Learning
                                    </h5>
                                    <p className="card-text">
                                        202430_2 Spring 2024 Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2210/Home">
                                <img src="/images/webdevelopment.jpg" width="100%" height="200px" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2210 Web Development
                                    </h5>
                                    <p className="card-text">
                                        202430_2 Spring 2024 Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/4321/Home">
                                <img src="/images/databases.jpg" width="100%" height="200px" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4321 Databases
                                    </h5>
                                    <p className="card-text">
                                        202430_2 Spring 2024 Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
