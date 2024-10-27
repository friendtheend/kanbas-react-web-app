import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
    // { todo, setTodo, addTodo, updateTodo }
) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <input
                defaultValue={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
            &nbsp;
            <button onClick={() => dispatch(addTodo(todo))}
                className="btn btn-success me-2"
                id="wd-add-todo-click"> Add </button>
            &nbsp;

            <button onClick={() => dispatch(updateTodo(todo))}
                className="btn btn-warning me-2"
                id="wd-update-todo-click"> Update </button>
        </li>
    );
}
