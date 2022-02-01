import { connect } from 'react-redux'
import Form from '../components/Form'
import { setUserState } from '../../userSlice'

export default connect(state => {
    return {
        logined_id: state.user.logined_id
    }
}, dispatch => {
    return {
        onSubmit: (userId, money, logined_id) => {
            fetch('/users/' + userId + '/charge_money', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    logined_id: logined_id,
                    money: money
                })
            }).then(res => res.json().then(json => {
                if (!json.result) {
                    alert(json.message)
                } else {
                    alert('성공')
                    dispatch(setUserState({
                        type: 'ADD_MONEY',
                        money: money
                    }))
                }
            }))
        }
    }
})(Form)