import { connect } from 'react-redux'
import DealList from '../components/DealList'

export default connect(state => {
    return {
        list: null
    }
})(DealList);