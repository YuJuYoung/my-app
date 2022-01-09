import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        items: [
            { value: 'ㅇㅅㅇ1', path: '/ddd1' },
            { value: 'ㅇㅅㅇ2', path: '/ddd2' }
        ]
    },
    reducers: {
        
    }
})

// export const {  } = navSlice.actions
export default navSlice.reducer