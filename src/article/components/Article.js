import LoginForm from "../loginForm/containers/LoginForm"
import { useSelector } from 'react-redux'

const Article = (props) => {
    const logined = useSelector(props.getLoginstate)

    return (
        <div className='Article'>
            {
                logined
                ? <h2>ㅇㅅㅇ!</h2>
                : <LoginForm />
            }
        </div>
    )
}

export default Article