import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        logined_id: null,
        logined_nickname: null
    },
    reducers: {
        setLoginState: (state, action) => {
            var payload = action.payload;

            if (payload.type === 'LOGIN') {
                state.logined_id = payload.id;
                state.logined_nickname = payload.nickname;
            } else {
                state.logined_id = null;
                state.logined_nickname = null;
            }
        }
    }
})

export const { setLoginState } = userSlice.actions
export default userSlice.reducer