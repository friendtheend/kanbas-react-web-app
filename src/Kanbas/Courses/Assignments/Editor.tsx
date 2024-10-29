import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { addassignments, updateassignments } from './reducer';
import { assignments } from '../../Database';

export default function AssignmentEditor() {
    const navigate = useNavigate();
    const { cid, aid } = useParams();  // 获取课程 ID 和作业 ID
    const dispatch = useDispatch();

    // 从 Redux store 获取 assignments 列表
    const assignments = useSelector((state: any) => state.assignments.assignments);

    // 查找当前编辑的 assignment（如果有的话）
    const existingAssignment = aid ? assignments.find((assignment: any) => assignment._id === aid) : null;

    // 初始化本地状态
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState(0);
    const [availableDate, setAvailableDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    // 使用 useEffect 初始化状态（仅在组件挂载或 aid 变化时执行）
    useEffect(() => {
        if (existingAssignment) {
            setTitle(existingAssignment.title);
            setDescription(existingAssignment.description);
            setPoints(existingAssignment.points);
            setAvailableDate(existingAssignment.availableDate);
            setDueDate(existingAssignment.dueDate);
        }
    }, [existingAssignment]);

    // 处理保存按钮的点击
    const handleSave = () => {
        if (aid && existingAssignment) {
            // 更新现有作业
            const updatedAssignment = {
                ...existingAssignment,
                title,
                description,
                availableDate,
                dueDate,
                points,
            };
            dispatch(updateassignments(updatedAssignment));

        }
        else {
            const newAssignment = {
                _id: new Date().getTime().toString(),
                course: cid,
                title,
                description,
                availableDate,
                dueDate,
                points,
            };
            // 更新 Redux 状态
            dispatch(addassignments(newAssignment));
        }

        // 保存后导航回作业列表页面
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><p />
            <input
                id="wd-name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
            /><p />
            <br />

            <label htmlFor="wd-description">Assignment Description</label>
            <p />
            <div className="col">
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={12}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <br />

            <div id="wd-css-responsive-forms-1">
                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-4 col-form-label d-flex justify-content-end">Points</label>
                    <div className="col-sm-8">
                        <input
                            id="wd-points"
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(Number(e.target.value))}
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-available-from" className="col-sm-4 col-form-label d-flex justify-content-end">Available From</label>
                    <div className="col-sm-8">
                        <input
                            type="datetime-local"
                            id="wd-available-from"
                            value={availableDate}
                            onChange={(e) => setAvailableDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-due-date" className="col-sm-4 col-form-label d-flex justify-content-end">Due Date</label>
                    <div className="col-sm-8">
                        <input
                            type="datetime-local"
                            id="wd-due-date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </div>

                <hr />
                {/* 按钮组 */}
                <div className="d-flex justify-content-end mt-3">
                    <button id="wd-cancel" className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                    <button id="wd-save" className="btn btn-danger" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}
