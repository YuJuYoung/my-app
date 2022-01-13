import LoginForm from "../user/login/containers/LoginForm"
import ChatList from "../chatList/containers/ChatList"

const Article = (props) => {
    const logined = props.logined

    return (
        <div className='Article'>
            {logined ? <ChatList /> : <LoginForm />}
        </div>
    )
}

export default Article