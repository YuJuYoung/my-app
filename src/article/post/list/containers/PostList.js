import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { setPostList } from '../../postSlice';

export default connect(state => {
    return {
        logined: state.user.logined_id,
        list: state.post.list
    }
}, dispatch => {
    return {
        initPostList: () => {
            fetch('/posts/list').then(res => res.json().then(json => {
                if (json.list) {
                    dispatch(setPostList({
                        list: json.list
                    }))
                }
            }))
        }
    }
})(PostList);