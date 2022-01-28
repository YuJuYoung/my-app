import { connect } from 'react-redux'
import Transaction from '../components/Transaction'

export default connect(state => {
    return {
        logined: state.user.logined_id
    }
})(Transaction)