import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { setLoginState } from '../../../user/userSlice'

export default connect(null, dispatch => {
    return {
        onSubmit: (email, pwd) => {
            fetch('/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: pwd
                })
            }).then(res => {
                res.json().then(json => {
                    if (json.result) {
                        dispatch(setLoginState({
                            type: 'LOGIN',
                            id: json.id,
                            user: json.user
                        }))
                    } else {
                        alert(json.message)
                    }
                })
            })
        }
    }
})(LoginForm)