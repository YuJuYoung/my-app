import { connect } from 'react-redux'
import Article from '../components/Article'

export default connect((state) => {
    return {
        logined: state.user.logined_id
    }
})(Article)