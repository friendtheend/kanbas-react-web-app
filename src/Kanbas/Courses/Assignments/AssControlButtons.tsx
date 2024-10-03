import { IoEllipsisVertical } from "react-icons/io5";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function AssControlButtons() {
    return (
        <div className="float-end">
            <FaPlus className="fs-5" ms-5 />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

