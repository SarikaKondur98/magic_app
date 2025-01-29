import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentData = createAsyncThunk('wizards/fetchWizards', async () => {
    const response = await fetch('https://harry-potter-api-en.onrender.com/db');
    const data = await response.json();
    console.log(data);
    return data.characters;
});

const studentDataSlice = createSlice ({
    name:'wizards',
    initialState: {
        wizards: [],
        error: null,
        status: 'idle'
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchStudentData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchStudentData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.wizards = action.payload;
          })
          .addCase(fetchStudentData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
});


export default studentDataSlice.reducer;
