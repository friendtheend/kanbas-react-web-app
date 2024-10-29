import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addassignments: (state, { payload: assignments }) => {
            const newassignments: any = {
                _id: new Date().getTime().toString(),
                course: assignments.course,
                title: assignments.title,
                description: assignments.description,
                availableDate: assignments.availableDate,
                dueDate: assignments.dueDate,
                points: assignments.points,
            };
            state.assignments = [...state.assignments, newassignments] as any;
        },
        deleteassignments: (state, { payload: assignmentsId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentsId);
        },
        updateassignments: (state, { payload: assignments }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignments._id ? assignments : m
            ) as any;
        },
        editassignments: (state, { payload: assignmentsId }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignmentsId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { addassignments, deleteassignments, updateassignments, editassignments } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;