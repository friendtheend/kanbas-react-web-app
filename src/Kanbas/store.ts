// import { configureStore } from "@reduxjs/toolkit";
// import modulesReducer from "./Courses/Modules/reducer";
// import accountReducer from "./Account/reducer";
// import assignmentsReducer from "./Courses/Assignments/reducer";

// const store = configureStore({
//     reducer: {
//         modulesReducer,
//         accountReducer,
//         assignments: assignmentsReducer
//     },
// });
// export default store;
import { configureStore, createSlice } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState: [],
    reducers: {
        updateEnrollments: (state, action) => {
            return action.payload;
        },
    },
});

export const { updateEnrollments } = enrollmentSlice.actions;

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignments: assignmentsReducer,
        enrollmentReducer: enrollmentSlice.reducer,
    },
});

export default store;
