import { Routes, Route } from 'react-router-dom'
import DealList from '../list/containers/DealList'

const Deal = (props) => {
    return (
        <div className="Deal">
            <Routes>
                <Route path="/" element={<DealList />}/>
            </Routes>
        </div>
    )
}

export default Deal