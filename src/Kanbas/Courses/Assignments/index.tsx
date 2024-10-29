import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router";
import { BsCheckCircle, BsThreeDotsVertical, BsGripVertical, BsTrash } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { deleteassignments } from './reducer';
import { SlNote } from 'react-icons/sl';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch(); // 使用 useDispatch

    // 使用 useSelector 从 Redux store 中获取 assignments 状态
    const assignments = useSelector((state: any) => state.assignments.assignments);

    // 本地状态用于控制删除对话框的显示
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<{ _id: string } | null>(null);

    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/newAssignment`);
    };

    // 处理删除按钮的点击，显示确认对话框
    const handleDeleteClick = (assignment: any) => {
        setAssignmentToDelete(assignment);
        setShowDeleteDialog(true);
    };

    // 确认删除作业
    const confirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteassignments(assignmentToDelete._id));
        }
        setShowDeleteDialog(false);
        setAssignmentToDelete(null);
    };

    // 取消删除
    const cancelDelete = () => {
        setShowDeleteDialog(false);
        setAssignmentToDelete(null);
    };

    return (
        <div id="wd-assignments" className="p-4">
            {/* 删除对话框 */}
            {showDeleteDialog && (
                <div className="delete-dialog-overlay" style={overlayStyle}>
                    <div className="delete-dialog" style={dialogStyle}>
                        <h5>Confirm Delete</h5>
                        <p>Are you sure you want to delete this assignment?</p>
                        <div className="delete-dialog-buttons">
                            <button className="btn btn-secondary me-2" onClick={cancelDelete}>Cancel</button>
                            <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}

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
                    <button className="btn btn-danger" onClick={handleAddAssignment}>+ Assignment</button>
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
                    </div>
                </div>

                <ul className="list-group">
                    {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green", borderBottom: "1px solid black" }}>
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <SlNote />
                                    <i className="bi bi-file-earmark-text me-2 fs-5"></i>
                                    <div>
                                        <Link
                                            className="wd-assignment-link fw-bold text-primary"
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        >
                                            {assignment.title}
                                        </Link>
                                        <p className="mb-0">
                                            <span className="text-danger" style={{ display: "inline" }}>{assignment.description}</span> |
                                            <strong> Not available until: {assignment.availableDate}</strong> |
                                            <strong> Due: {assignment.dueDate}</strong> |
                                            <span className="fw-bold text-secondary"> {assignment.points} pts</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <BsTrash
                                        className="text-danger fs-4"
                                        role="button"
                                        onClick={() => handleDeleteClick(assignment)}
                                    />
                                    &nbsp;
                                    &nbsp;
                                    <BsCheckCircle className="text-success me-3 fs-4" />
                                    <BsThreeDotsVertical className="fs-5" />
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

// 自定义的样式，用于对话框和覆盖层
const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const dialogStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '400px',
    maxWidth: '100%',
};
