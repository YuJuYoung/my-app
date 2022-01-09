import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

export default connect((state) => {
    return {
        onSubmit: (id, pwd) => {
            fetch('/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    password: pwd
                })
            }).then(json => {
                alert(json.message)
            })
        }
    }
})(LoginForm)