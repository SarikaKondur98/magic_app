import { configureStore } from "@reduxjs/toolkit";
import studentDataReducer from '../Students/StudentData/StudentDataSlice';
import addStudentReducer from '../Students/StudentData/AddStudentSlice';

export const store = configureStore({
    reducer: {
        wizards: studentDataReducer,
        addWizards: addStudentReducer,
    }
})