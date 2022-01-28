import { createSlice } from '@reduxjs/toolkit'

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        list: null
    },
    reducers: {
        setTransactionList: (state, action) => {
            var type = action.payload.type;

            if (type === 'INIT') {
                state.list = action.payload.list;
            }
        }
    }
})

export const { setTransactionList } = transactionSlice.actions;
export default transactionSlice.reducer