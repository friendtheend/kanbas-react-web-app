import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { FiPlus } from "react-icons/fi";
import React from "react";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaPlus className="fs-5" ms-5 />
            <IoEllipsisVertical className="fs-5" ms-5 />
        </div>
    );
}

