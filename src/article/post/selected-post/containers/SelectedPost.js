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
                var post = json.post;
                var product = json.product;

                dispatch(setSelectedPost({
                    post: {
                        id: post.id,
                        title: post.title,
                        desc: post.description,
                        product_name: product.name,
                        price: product.price
                    }
                }))
            }))
        }
    }
})(SelectedPost)