import { connect } from 'react-redux'
import SelectedPost from '../components/SelectedPost'
import { setSelectedPost } from '../../postSlice'

export default connect(state => {
    return {
        post: state.post.selected_post,
        logined_id: state.user.logined_id
    }
}, dispatch => {
    return {
        initSelectedPost: (postId) => {
            fetch('/posts/' + postId).then(res => res.json().then(json => {
                var post = json.post;
                var product = json.product;

                if (!post || !product) {
                    dispatch(setSelectedPost({
                        type: 'INIT_POST',
                        post: 'NONE'
                    }))
                } else {
                    dispatch(setSelectedPost({
                        type: 'INIT_POST',
                        post: {
                            id: post.id,
                            user_id: post.user_id,
                            title: post.title,
                            desc: post.description,
                            product_name: product.name,
                            price: product.price
                        }
                    }))
                }
            }))
        },
        removeSelectedPost: () => {
            dispatch(setSelectedPost({
                type: 'INIT_POST',
                post: null
            }))
        },
        deletePost: (postId, logined_id) => {
            fetch('/posts/' + postId + '/delete', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    logined_id: logined_id
                })
            }).then(res => res.json().then(json => {
                if (!json.result) {
                    alert(json.message)
                } else {
                    alert('성공')
                }
            }))
        },
        buyProduct: (logined_id, postId) => {
            fetch('/posts/' + postId + '/buy', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    logined_id: logined_id
                })
            }).then(res => res.json().then(json => {
                if (!json.result) {
                    alert(json.message)
                } else {
                    alert('성공')
                }
            }))
        }
    }
})(SelectedPost)