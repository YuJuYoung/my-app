import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { setLoginState } from '../../article/user/userSlice'

export default connect(state => {
    return {
        items: state.nav.items,
        logined: state.user.logined_id
    }
}, dispatch => {
    return {
        logout: () => {
            fetch('/users/logout', {
                method: 'get'
            }).then(res => {
                res.json().then(json => {
                    if (json.result) {
                        dispatch(setLoginState({
                            type: 'LOGOUT'
                        }))
                    } else {
                        alert('오류 발생')
                    }
                })
            })
        }
    }
})(Nav)