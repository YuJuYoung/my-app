import { connect } from 'react-redux'
import PostList from '../components/PostList'

export default connect(state => {
    return {
        list: null
    }
})(PostList);