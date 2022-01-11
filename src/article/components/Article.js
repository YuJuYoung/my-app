import LoginForm from "../loginForm/containers/LoginForm"
import ChatList from "../chatList/containers/ChatList"
import { useSelector } from 'react-redux'

const Article = (props) => {
    const logined = useSelector(props.getLoginstate)

    return (
        <div className='Article'>
            {logined ? <ChatList /> : <LoginForm />}
        </div>
    )
}

export default Article