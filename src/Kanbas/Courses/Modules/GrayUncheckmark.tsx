import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function GrayUncheckmark() {
    return (
        <span className="me-1 position-relative">
            <FaCircleXmark style={{ top: "2px", color: "gray" }}
                className="me-1 position-absolute fs-5" />
            <FaCircle className="text-white me-1 fs-6" />
        </span>
    );
}
