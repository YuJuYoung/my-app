import { createSlice } from '@reduxjs/toolkit'

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        logined_id: null,
        logined_nickname: null
    },
    reducers: {
        setLoginState: (state, action) => {
            if (action.payload.type === 'LOGIN') {
                state.logined_id = action.payload.id;
                state.logined_nickname = action.payload.nickname;
            } else {
                state.logined_id = null;
                state.logined_nickname = null;
            }
        }
    }
})

export const { setLoginState } = articleSlice.actions
export default articleSlice.reducer