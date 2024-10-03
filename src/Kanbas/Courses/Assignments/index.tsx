
import React from 'react';
import { BsCheckCircle, BsThreeDotsVertical, BsGripVertical } from 'react-icons/bs'; // React Icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for spacing
import LessonControlButtons from '../Modules/LessonControlButtons';
import AssControlButtons from './AssControlButtons';
import { SlNote } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";


export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* 搜索框部分 */}
                <div className="input-group w-50">
                    <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: 'white', border: '1px solid #ced4da' }}>
                        <FaMagnifyingGlass />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </div>
                {/* 按钮部分 */}
                <div>
                    <button className="btn btn-outline-secondary me-2">+ Group</button>
                    <button className="btn btn-danger">+ Assignment</button>
                </div>
            </div>




            <div className="wd-module list-group-item p-0 mb-5 fs-5 border border-3 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                    <div>
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <span className="text-muted me-3">40% of Total</span>
                        <AssControlButtons />
                    </div>
                </div>

                {/* Assignment A1 */}
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green", borderBottom: "1px solid black" }}>
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <SlNote />
                        <i className="bi bi-file-earmark-text me-2 fs-5"></i>
                        <div>
                            <a className="wd-assignment-link fw-bold text-primary"
                                href="#/Kanbas/Courses/1234/Assignments/123">A1</a>
                            <p className="mb-0">
                                <span className="text-danger" style={{ display: "inline" }}>Multiple Modules</span> |
                                <strong> Not available until</strong> May 10 at 12:00am |
                                <strong> Due</strong> May 13 at 11:59pm |
                                <span className="fw-bold text-secondary"> 100 pts</span>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <BsCheckCircle className="text-success me-3 fs-4" />
                        <BsThreeDotsVertical className="fs-5" />
                    </div>
                </li>




                {/* Assignment A2 */}
                <li className="list-group-item d-flex justify-content-between align-items-center " style={{ borderLeft: "4px solid green", borderBottom: "1px solid black" }}>
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <SlNote />
                        <i className="bi bi-file-earmark-text me-2 fs-5"></i>
                        <div>
                            <a className="wd-assignment-link fw-bold text-primary"
                                href="#/Kanbas/Courses/1234/Assignments/124">A2</a>
                            <p className="mb-0">
                                <span className="text-danger" style={{ display: "inline" }}>Multiple Modules</span> |
                                <strong> Not available until</strong> May 15 at 12:00am |
                                <strong> Due</strong> May 20 at 11:59pm |
                                <span className="fw-bold text-secondary"> 100 pts</span>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <BsCheckCircle className="text-success me-3 fs-4" />
                        <BsThreeDotsVertical className="fs-5" />
                    </div>
                </li>

                {/* Assignment A3 */}
                <li className="list-group-item d-flex justify-content-between align-items-center " style={{ borderLeft: "4px solid green", borderBottom: "1px solid black" }}>
                    <div className="d-flex align-items-center">

                        <BsGripVertical className="me-2 fs-3" />
                        <SlNote />
                        <i className="bi bi-file-earmark-text me-2 fs-5"></i>
                        <div>
                            <a className="wd-assignment-link fw-bold text-primary"
                                href="#/Kanbas/Courses/1234/Assignments/125">A3</a>
                            <p className="mb-0">
                                <span className="text-danger" style={{ display: "inline" }}>Multiple Modules</span> |
                                <strong> Not available until</strong> May 20 at 12:00am |
                                <strong> Due</strong> May 25 at 11:59pm |
                                <span className="fw-bold text-secondary"> 100 pts</span>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <BsCheckCircle className="text-success me-3 fs-4" />
                        <BsThreeDotsVertical className="fs-5" />
                    </div>
                </li>

            </div>
        </div >
    );
}
