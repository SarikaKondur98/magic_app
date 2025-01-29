import { configureStore } from "@reduxjs/toolkit";
import studentDataReducer from '../Students/StudentData/StudentDataSlice';

export const store = configureStore({
    reducer: {
        wizards: studentDataReducer,
    }
})