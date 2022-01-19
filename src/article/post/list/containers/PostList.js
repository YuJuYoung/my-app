import { connect } from 'react-redux'
import PostList from '../components/PostList'

export default connect(state => {
    return {
        logined: state.user.logined_id,
        list: null
    }
})(PostList);