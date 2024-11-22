import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector } from "react-redux";
import GreenCheckmark from "./GreenCheckmark";
import React from "react";

export default function LessonControlButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (

    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <>
          <GreenCheckmark />
          <IoEllipsisVertical className="fs-4" />
        </>
      )}
    </div>

  );
}
