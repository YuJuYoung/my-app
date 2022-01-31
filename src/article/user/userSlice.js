import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        logined_id: null,
        user: null
    },
    reducers: {
        setLoginState: (state, action) => {
            var payload = action.payload;

            if (payload.type === 'LOGIN') {
                state.logined_id = payload.id;
                state.user = payload.user;
            } else {
                state.logined_id = null;
                state.user = null;
            }
        }
    }
})

export const { setLoginState } = userSlice.actions
export default userSlice.reducer