import LoginForm from "../user/login/containers/LoginForm"
import ChatList from "../chat/list/containers/ChatList"
import CreateForm from '../user/create/containers/CreateForm'
import { Routes, Route } from "react-router-dom"

const Article = (props) => {
    const logined = props.logined

    return (
        <div className='Article'>
            <Routes>
                <Route path="/" element={logined ? <ChatList /> : <LoginForm />} />
                <Route path="users/create" element={<CreateForm />}/>
            </Routes>
        </div>
    )
}

export default Article