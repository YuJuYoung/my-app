import { Routes, Route } from 'react-router-dom'

import TransactionList from '../list/containers/TransactionList'

const Transaction = (props) => {
    return (
        <div className='Transaction'>
            {
                !props.logined
                ? null
                : <Routes>
                    <Route path="/" element={<TransactionList />}/>
                </Routes>
            }
        </div>
    )
}

export default Transaction