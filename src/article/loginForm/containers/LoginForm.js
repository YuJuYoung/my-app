import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

export default connect((state) => {
    return {
        onSubmit: (id, pwd) => {
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
                        state.article.toggleLoginState(state.article)
                    } else {
                        alert(json.message)
                    }
                })
            })
        }
    }
})(LoginForm)