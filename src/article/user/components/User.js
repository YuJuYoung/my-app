import { Routes, Route } from 'react-router-dom'
import LoginForm from '../login/containers/LoginForm'
import CreateForm from '../create/containers/CreateForm'
import ChargeMoneyForm from '../chargeMoney/containers/Form'

const User = (props) => {
    return (
        <div className="User">
            <Routes>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/create" element={<CreateForm />}/>
                <Route path="/:userId/charge_money" element={<ChargeMoneyForm />}/>
            </Routes>
        </div>
    )
}

export default User;