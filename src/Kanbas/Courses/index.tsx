import React from "react";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                Course 1234 </h2> <hr />
            {/* <table>
                <tr>
                    <td valign="top"> */}
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                    {/* </td>
                    <td valign="top"> */}
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/"
                            element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Assignments"
                            element={<h3>Assignments</h3>} />
                        <Route path="Assignments/:aid"
                            element={<h3>Assignment Editor</h3>} />
                        <Route path="People" element={<h3>People</h3>} />
                    </Routes>
                </div></div>
            {/* </td>
                </tr>
            </table> */}
        </div>
    );
}

