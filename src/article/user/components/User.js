import { Routes, Route } from 'react-router-dom'
import LoginForm from '../login/containers/LoginForm'
import CreateForm from '../create/containers/CreateForm'

const User = (props) => {
    return (
        <div className="User">
            <Routes>
                <Route path="/" element={<LoginForm />}/>
                <Route path="/users/login" element={<CreateForm />}/>
            </Routes>
        </div>
    )
}

export default User;