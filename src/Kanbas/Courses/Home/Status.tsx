
import React from "react";

import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaChartBar, FaBullhorn, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>

            {/* Unpublish and Publish Buttons */}
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
                    </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish
                    </button>
                </div>
            </div>

            <br />

            {/* Import Existing Content */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content
            </button>

            {/* Import from Commons */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
            </button>

            {/* Choose Home Page */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaHome className="me-2 fs-5" /> Choose Home Page
            </button>

            {/* View Course Screen */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaChartBar className="me-2 fs-5" /> View Course Screen
            </button>

            {/* New Announcement */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaBullhorn className="me-2 fs-5" /> New Announcement
            </button>

            {/* New Analytics */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaChartBar className="me-2 fs-5" /> New Analytics
            </button>

            {/* View Course Notifications */}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaBell className="me-2 fs-5" /> View Course Notifications
            </button>
        </div>
    );
}
