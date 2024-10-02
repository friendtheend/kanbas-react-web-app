import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCalendarSolid, LiaCogSolid, LiaMailBulkSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="NEU.png" width="75px" /></a>

      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
        style={{ marginBottom: '5px' }}>
        <FaRegCircleUser className="fs-1 text text-white" />
        Account
      </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger"
        style={{ marginBottom: '5px' }}>
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard
      </Link>

      <Link to="/Kanbas/Dashboard" id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0"
        style={{ marginBottom: '5px' }}>
        <LiaBookSolid className="fs-1 text-danger" />
        Courses
      </Link>

      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0"
        style={{ marginBottom: '5px' }}>
        <LiaCalendarSolid className="fs-1 text-danger" />
        Calendar
      </Link>

      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0"
        style={{ marginBottom: '5px' }}>
        <div className="d-flex flex-column align-items-center">
          <LiaMailBulkSolid className="fs-1 text-danger" />
          <span>Inbox</span>
        </div>
      </Link>

      <Link to="/Labs" id="wd-labs-link"
        className="list-group-item text-white bg-black text-center border-0"
        style={{ marginBottom: '5px' }}>
        <div className="d-flex flex-column align-items-center">
          <ImLab className="fs-1 text-danger" />
          <span>Labs</span>
        </div>
      </Link>
    </div>
  );
}
