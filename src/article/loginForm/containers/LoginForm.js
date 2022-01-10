import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { toggleLoginState } from '../../articleSlice'

export default connect((state) => {
    return {
        onSubmit: (id, pwd, dispatch) => {
            fetch('/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    password: pwd
                })
            }).then(res => {
                res.json().then(json => {
                    if (json.result) {
                        dispatch(toggleLoginState())
                    } else {
                        alert(json.message)
                    }
                })
            })
        }
    }
})(LoginForm)