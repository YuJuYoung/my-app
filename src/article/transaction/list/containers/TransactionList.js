import { connect } from 'react-redux'
import TransactionList from '../conpoenets/TransactionList'
import { setTransactionList } from '../../transactionSlice'

export default connect(state => {
    return {
        logined_id: state.user.logined_id,
        list: state.transaction.list
    }
}, dispatch => {
    return {
        initTransactionList: (logined_id) => {
            fetch('/transactions', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    logined_id: logined_id
                })
            }).then(res => res.json().then(json => {
                if (json.list[0]) {
                    dispatch(setTransactionList({
                        type: 'INIT',
                        list: json.list
                    }))
                } else {
                    dispatch(setTransactionList({
                        type: 'INIT',
                        list: 'NONE'
                    }))
                }
            }))
        },
        removeList: () => {
            dispatch(setTransactionList({
                type: 'INIT',
                list: null
            }))
        }
    }
})(TransactionList)