import { connect } from 'react-redux'
import CreateForm from '../components/CreateForm'

export default connect(null, dispatch => {
    return {
        onSubmit: (email, pwd, nickname) => {
            fetch('/users/create', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: pwd,
                    nickname: nickname
                })
            }).then(res => {
                res.json().then(json => {
                    if (json.result) {
                        alert('회원가입 성공')
                    } else {
                        alert('오류 발생')
                    }
                })
            })
        }
    }
})()