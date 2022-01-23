import { connect } from 'react-redux'
import CreateForm from '../components/CreateForm'
import { setLoginState } from '../../../user/userSlice'

export default connect(state => {
    return {
        logined_id: state.user.logined_id
    }
}, dispatch => {
    return {
        onSubmit: (post, product, logined_id) => {
            fetch('/posts/create', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    post: post,
                    product: product,
                    logined_id: logined_id
                })
            }).then(res => {
                res.json().then(json => {
                    if (json.result) {
                        alert('성공')
                    } else {
                        dispatch(setLoginState({
                            type: 'LOGOUT'
                        }));
                        alert(json.message);
                    }
                })
            })
        }
    }
})(CreateForm);