import { connect } from 'react-redux'
import SelectedPost from '../components/SelectedPost'
import { setSelectedPost } from '../../postSlice'

export default connect(state => {
    return {
        post: state.post.selected_post
    }
}, dispatch => {
    return {
        initSelectedPost: (postId) => {
            fetch('/posts/' + postId).then(res => res.json().then(json => {
                var result = json.result;

                dispatch(setSelectedPost({
                    post: {
                        id: result.id,
                        title: result.title,
                        desc: result.description,
                        tag: result.tag,
                        user_id: result.user_id
                    }
                }))
            }))
        }
    }
})(SelectedPost)