import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        signInStart: (state, action) => {
            state.loading = true,
            state.error=null
        },

        signInSuccess: (state, action) => {
            state.loading = false,
            state.error = null,
            state.currentUser=action.payload
        },

        signInFailure: (state, action) => {
            state.error = action.payload,
            state.loading=false
        },

        signoutStart: (state,action) => {
            state.loading = true
            state.error=null
        },

        signoutSuccess: (state,action) => {
            state.loading = false,
            state.currentUser=null,
            state.error = null
            
        },

        signoutFailure: (state,action)=>{
            state.error = action.payload,
            state.loading = false
           
        },

        clearError: (state) => {
            state.error=null
        }
    }

});

export const { signInFailure, signInStart, signInSuccess,signoutStart,signoutSuccess,signoutFailure, clearError } = userSlice.actions;

export default userSlice.reducer;