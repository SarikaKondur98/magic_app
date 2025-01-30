import { createSlice } from "@reduxjs/toolkit";

const addStudentSlice = createSlice({
    name: "addWizards",
    initialState: {
        studentName: '',
        selectedHouse: '',
        countryName: '',
        storeStudentData: [],
        showMessage: false
    },
    reducers: {
        setStudentName(state, actions) {
            state.studentName = actions.payload
        },
        setSelectedHouse(state,action) {
            state.selectedHouse = action.payload
        },
        setCountryName(state, actions) {
            state.countryName = actions.payload
        },
        setStoredStudentData(state, actions) {
            state.storeStudentData = [...state.storeStudentData, actions.payload];
        },
        resetForm(state) {
            state.studentName = '';
            state.selectedHouse = '';
            state.countryName = '';
            state.showMessage = true;
        },
        hideMessage(state) {
            state.showMessage = false;
        }
    }
});

export const {
    setStudentName,
    setSelectedHouse,
    setCountryName,
    setStoredStudentData,
    resetForm,
    hideMessage
} = addStudentSlice.actions;

export default addStudentSlice.reducer;