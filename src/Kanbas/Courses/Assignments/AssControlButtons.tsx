import { IoEllipsisVertical } from "react-icons/io5";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';  // 导入 useSelector 和 useDispatch
import { useParams, useNavigate } from "react-router";
import { BsCheckCircle, BsThreeDotsVertical, BsGripVertical } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { SlNote } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AssControlButtons() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/newAssignment`);
    };

    return (
        <div className="float-end">
            <FaPlus className="fs-5" ms-5 onClick={handleAddAssignment} />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

