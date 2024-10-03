

// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; // 导入Bootstrap样式

// export default function AssignmentEditor() {
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

//             {/* Submission Type */}
//             <div className="row mb-3 align-items-center">
//                 <div className="col-md-2 offset-md-1">
//                     <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//                 </div>
//                 <div className="col-md-9">
//                     <select id="wd-submission-type" className="form-control">
//                         <option>Online</option>
//                         <option>On Paper</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Online Entry Options */}
//             <div className="row mb-3">
//                 <div className="col-md-2 offset-md-1">
//                     <label className="form-label">Online Entry Options</label>
//                 </div>
//                 <div className="col-md-9">
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="website-url" checked />
//                         <label className="form-check-label" htmlFor="website-url">Website URL</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="text-entry" />
//                         <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="media-recordings" />
//                         <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
//                     </div>
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="file-uploads" />
//                         <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
//                     </div>
//                 </div>
//             </div>

//             {/* Assign To */}
//             <div className="row mb-3 align-items-center">
//                 <div className="col-md-2 offset-md-1">
//                     <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
//                 </div>
//                 <div className="col-md-9">
//                     <select id="wd-assign-to" className="form-control">
//                         <option>Everyone</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Due Date */}
//             <div className="row mb-3 align-items-center">
//                 <div className="col-md-2 offset-md-1">
//                     <label htmlFor="wd-due-date" className="form-label">Due Date</label>
//                 </div>
//                 <div className="col-md-9">
//                     <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
//                 </div>
//             </div>

//             {/* Available From / Until */}
//             <div className="row mb-3 align-items-center">
//                 <div className="col-md-2 offset-md-1">
//                     <label htmlFor="wd-available-from" className="form-label">Available From</label>
//                 </div>
//                 <div className="col-md-3">
//                     <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue="2024-05-06T12:00" />
//                 </div>
//                 <div className="col-md-2">
//                     <label htmlFor="wd-available-until" className="form-label">Until</label>
//                 </div>
//                 <div className="col-md-3">
//                     <input type="datetime-local" id="wd-available-until" className="form-control" defaultValue="2024-05-07T12:00" />
//                 </div>
//             </div>

//             {/* 按钮组 */}
//             <div className="d-flex justify-content-end mt-3">
//                 <button className="btn btn-secondary me-2">Cancel</button>
//                 <button className="btn btn-danger ">Save</button>
//             </div>
//         </div>
//     );
// }


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // 导入Bootstrap样式

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            {/* Assignment Name */}
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control" value="A1" />
                </div>
            </div>

            {/* Description */}
            <div className="row mb-3">
                <div className="col">
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={12}
                        defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following:
                                       - Your full name and section
                                       - Links to each of the lab assignments
                                       - Link to the Kanbas application
                                       - Links to all relevant source code repositories"
                    />
                </div>
            </div>

            {/* Points */}
            <div className="row mb-3 align-items-center">
                <div className="col-md-2 offset-md-1">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-9">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>

            {/* Assignment Group */}
            <div className="row mb-3 align-items-center">
                <div className="col-md-2 offset-md-1">
                    <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-9">
                    <select id="wd-assignment-group" className="form-control">
                        <option>Assignments</option>
                    </select>
                </div>
            </div>

            {/* Display Grade as */}
            <div className="row mb-3 align-items-center">
                <div className="col-md-2 offset-md-1">
                    <label htmlFor="wd-display-grade" className="form-label">Display Grade as</label>
                </div>
                <div className="col-md-9">
                    <select id="wd-display-grade" className="form-control">
                        <option>Percentage</option>
                        <option>Points</option>
                    </select>
                </div>
            </div>

            {/* Submission Type Label outside the bordered box */}
            <div className="row mb-3">
                <div className="col-md-2 offset-md-1">
                    <label className="form-label">Submission Type</label>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <select id="wd-submission-type" className="form-control">
                                <option>Online</option>
                                <option>On Paper</option>
                            </select>

                            {/* Online Entry Options nested within Submission Type */}
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
                </div>
            </div>

            {/* Assign To Label outside the bordered box */}
            <div className="row mb-3">
                <div className="col-md-2 offset-md-1">
                    <label className="form-label">Assign To</label>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <select id="wd-assign-to" className="form-control">
                                <option>Everyone</option>
                            </select>

                            {/* Due Date, Available From, Until nested within Assign To */}
                            <div className="mt-3">
                                <div className="row mb-3 align-items-center">
                                    <div className="col-md-4">
                                        <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                                        <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                        <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue="2024-05-06T12:00" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                                        <input type="datetime-local" id="wd-available-until" className="form-control" defaultValue="2024-05-07T12:00" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 按钮组 */}
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}
