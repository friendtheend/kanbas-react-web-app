// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; // 导入Bootstrap样式
// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { BsGripVertical, BsCheckCircle, BsThreeDotsVertical } from 'react-icons/bs';
// import { SlNote } from 'react-icons/sl';
// import AssControlButtons from './AssControlButtons';
// import * as db from "../../Database";

// export default function AssignmentEditor() {
//     const { cid, assignmentId } = useParams();
//     const assignment = db.assignments.find(
//         (assignment) => assignment._id === assignmentId
//     );
//     return (
//         <div id="wd-assignments-editor" className="container mt-4">
//             {/* Assignment Name */}
//             <div className="row mb-3">
//                 <div className="col">
//                     <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//                     <input id="wd-name" className="form-control" value="A1" />
//                 </div>
//             </div>

//             {/* Description */}
//             <div className="row mb-3">
//                 <div className="col">
//                     <textarea
//                         id="wd-description"
//                         className="form-control"
//                         rows={12}
//                         defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following:
//                                        - Your full name and section
//                                        - Links to each of the lab assignments
//                                        - Link to the Kanbas application
//                                        - Links to all relevant source code repositories"
//                     />
//                 </div>
//             </div>

//             {/* Points */}
//             <div className="row mb-3 align-items-center">
//                 <div className="col-md-2 offset-md-1">
//                     <label htmlFor="wd-points" className="form-label">Points</label>
//                 </div>
//                 <div className="col-md-9">
//                     <input id="wd-points" className="form-control" value={100} />
//                 </div>
//             </div>

//             {/* Assignment Group */}
//             <div className="row mb-3 align-items-center">
//                 <div className="col-md-2 offset-md-1">
//                     <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
//                 </div>
//                 <div className="col-md-9">
//                     <select id="wd-assignment-group" className="form-control">
//                         <option>Assignments</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Display Grade as */}
//             <div className="row mb-3 align-items-center">
//                 <div className="col-md-2 offset-md-1">
//                     <label htmlFor="wd-display-grade" className="form-label">Display Grade as</label>
//                 </div>
//                 <div className="col-md-9">
//                     <select id="wd-display-grade" className="form-control">
//                         <option>Percentage</option>
//                         <option>Points</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Submission Type Label outside the bordered box */}
//             <div className="row mb-3">
//                 <div className="col-md-2 offset-md-1">
//                     <label className="form-label">Submission Type</label>
//                 </div>
//                 <div className="col-md-9">
//                     <div className="card">
//                         <div className="card-body">
//                             <select id="wd-submission-type" className="form-control">
//                                 <option>Online</option>
//                                 <option>On Paper</option>
//                             </select>

//                             {/* Online Entry Options nested within Submission Type */}
//                             <div className="mt-3">
//                                 <label className="form-label">Online Entry Options</label>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" id="website-url" checked />
//                                     <label className="form-check-label" htmlFor="website-url">Website URL</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" id="text-entry" />
//                                     <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" id="media-recordings" />
//                                     <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" id="file-uploads" />
//                                     <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" id="file-uploads" />
//                                     <label className="form-check-label" htmlFor="file-uploads">Students Annotation</label>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Assign To Label outside the bordered box */}
//             <div className="row mb-3">
//                 <div className="col-md-2 offset-md-1">
//                     <label className="form-label">Assign To</label>
//                 </div>
//                 <div className="col-md-9">
//                     <div className="card">
//                         <div className="card-body">
//                             <select id="wd-assign-to" className="form-control">
//                                 <option>Everyone</option>
//                             </select>

//                             {/* Due Date, Available From, Until nested within Assign To */}
//                             <div className="mt-3">
//                                 <div className="row mb-3 align-items-center">
//                                     <div className="col-md-4">
//                                         <label htmlFor="wd-due-date" className="form-label">Due Date</label>
//                                         <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
//                                     </div>
//                                     <div className="col-md-4">
//                                         <label htmlFor="wd-available-from" className="form-label">Available From</label>
//                                         <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue="2024-05-06T12:00" />
//                                     </div>
//                                     <div className="col-md-4">
//                                         <label htmlFor="wd-available-until" className="form-label">Until</label>
//                                         <input type="datetime-local" id="wd-available-until" className="form-control" defaultValue="2024-05-07T12:00" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* 按钮组 */}
//             <div className="d-flex justify-content-end mt-3">
//                 <button className="btn btn-secondary me-2">Cancel</button>
//                 <button className="btn btn-danger">Save</button>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { assignments } from "../../Database";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';


export default function AssignmentEditor() {

    const { aid, cid } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === aid);

    return (

        // name 
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><p />
            <input id="wd-name" defaultValue={`${assignment?.title}`} className="form-control" /><p />
            <br />


            {/*  name  */}
            <label htmlFor="wd-name">Assignment Description</label>
            <p />
            <div className="col">
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={12}
                    defaultValue={assignment?.description}
                />
            </div>
            <br />

            <div id="wd-css-responsive-forms-1">

                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-4 col-form-label d-flex justify-content-end">Points</label>
                    <div className="col-sm-8">
                        <input id="wd-points" value={`${assignment?.points}`} className="form-control" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-4 col-form-label d-flex justify-content-end">Assignment Group</label>
                    <div className="col-sm-8">
                        <select id="default" className="form-select">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label d-flex justify-content-end">Display Grade as</label>

                    <div className="col-sm-8">
                        <select id="default" className="form-select">
                            <option value="ASSIGNMENTS">Percentage</option>
                            <option value="ASSIGNMENTS">Points</option>
                        </select>
                    </div>
                </div>

                <div className="mb-2 row p-3">
                    <label htmlFor="wd-submission-type" className="col-sm-4 col-form-label d-flex justify-content-end">Submission type</label>

                    <div className="col-sm-8 border p-3" >
                        <select id="d-submission-type" className="form-select">
                            <option value="Online">Online</option>
                        </select><p />
                        <div className="mt-3">
                            <label className="form-label">Online Entry Options</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="website-url" checked />
                                <label className="form-check-label" htmlFor="website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="text-entry" />
                                <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="media-recordings" />
                                <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="file-uploads" />
                                <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="file-uploads" />
                                <label className="form-check-label" htmlFor="file-uploads">Students Annotation</label>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mb-3 row p-3">
                    <label htmlFor="wd-submission-type" className="col-sm-4 col-form-label d-flex justify-content-end">Assign</label>

                    <div className="col-sm-8 border p-3" >
                        <label>Assign to</label>
                        <select id="d-submission-type" className="form-select">
                            <option value="Online">Online</option>
                        </select><p />
                        <div className="mb-3">
                        </div>

                        <div className="mt-3">
                            <div className="row mb-3 align-items-center">
                                <div className="col-md-4">
                                    <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                                    <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue={assignment?.dueDate} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                    <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue={assignment?.availableDate} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                                    <input type="datetime-local" id="wd-available-until" className="form-control" defaultValue={assignment?.dueDate} />
                                </div>
                            </div>

                        </div>
                    </div></div>

                <hr />
                {/* Buttons Group */}
                <div className="d-flex justify-content-end mt-3">
                    <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`}
                        className="wd-editor-course-link text-decoration-none text-dark" >
                        <button id="wd-save" className="btn btn-secondary me-2">Cancel</button>
                    </Link>
                    <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`}
                        className="wd-editor-course-link text-decoration-none text-dark" >
                        <button id="wd-cancel" className="btn btn-danger">Save</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}