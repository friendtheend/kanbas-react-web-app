import { configureStore, createSlice } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import { enrollments } from "../Kanbas/Database";

// const enrollmentSlice = createSlice({
//     name: "enrollments",
//     initialState: JSON.parse(localStorage.getItem("enrollments") || "[]"),
//     reducers: {
//         updateEnrollments: (state, action) => {
//             localStorage.setItem("enrollments", JSON.stringify(action.payload));
//             return action.payload;
//         },
//         enroll: (state, action) => {
//             const updatedState = [...state, action.payload];
//             localStorage.setItem("enrollments", JSON.stringify(updatedState));
//             return updatedState;
//         },
//         unenroll: (state, action) => {
//             const updatedState = state.filter((e: { course: any; user: any; }) => !(e.course === action.payload.course && e.user === action.payload.user));
//             localStorage.setItem("enrollments", JSON.stringify(updatedState));
//             return updatedState;
//         },
//     },
// });

// export const { updateEnrollments, enroll, unenroll } = enrollmentSlice.actions;

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState: enrollments, // 使用 JSON 文件中的数据作为初始状态
    reducers: {
        updateEnrollments: (state, action) => {
            return action.payload;
        },
        enroll: (state, action) => {
            return [...state, action.payload];
        },
        unenroll: (state, action) => {
            return state.filter(
                (e: { course: any; user: any; }) => !(e.course === action.payload.course && e.user === action.payload.user)
            );
        },
    },
});
// 确保在定义 enrollmentSlice 时已经导出 enroll 和 unenroll actions
export const { updateEnrollments, enroll, unenroll } = enrollmentSlice.actions;


const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignments: assignmentsReducer,
        enrollmentReducer: enrollmentSlice.reducer,
    },
});

export default store;
