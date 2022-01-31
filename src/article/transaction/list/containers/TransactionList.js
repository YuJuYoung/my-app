import { connect } from 'react-redux'
import TransactionList from '../conpoenets/TransactionList'
import { setTransactionList } from '../../transactionSlice'

const fetchList = (logined_id, dispatch) => {
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
}

export default connect(state => {
    return {
        logined_id: state.user.logined_id,
        list: state.transaction.list
    }
}, dispatch => {
    return {
        initTransactionList: (logined_id) => {
            fetchList(logined_id, dispatch)
        },
        removeList: () => {
            dispatch(setTransactionList({
                type: 'INIT',
                list: null
            }))
        },
        onAccept: (transaction_id, logined_id) => {
            fetch('/transactions/' + transaction_id + '/accept', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    logined_id: logined_id
                })
            }).then(res => res.json().then(json => {
                if (!json.result) {
                    alert(json.message)
                } else {
                    alert('거래 성공')
                    fetchList(logined_id, dispatch)
                }
            }))
        },
        onReject: (transaction_id, logined_id) => {
            fetch('/transactions/' + transaction_id + '/reject', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    logined_id: logined_id
                })
            }).then(res => res.json().then(json => {
                if (json.result) {
                    fetchList(logined_id, dispatch)
                } else {
                    alert(json.message)
                }
            }))
        }
    }
})(TransactionList)