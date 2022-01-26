import { connect } from 'react-redux'
import UpdateForm from '../components/UpdateForm'
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
                            title: post.title,
                            user_id: post.user_id,
                            desc: post.description,
                            product_name: product.name,
                            price: product.price
                        }
                    }))
                }
            }))
        },
        onSubmit: (post, product, logined_id, postId) => {
            fetch('/posts/' + postId + '/update', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    post: post,
                    product: product,
                    logined_id: logined_id,
                })
            }).then(res => res.json().then(json => {
                if (json.result) {
                    alert('성공')
                } else {
                    alert(json.message)
                }
            }))
        },
        changeTitle: value => {
            dispatch(setSelectedPost({
                type: 'UPDATE_TITLE',
                value: value
            }))
        },
        changeDESC: value => {
            dispatch(setSelectedPost({
                type: 'UPDATE_DESC',
                value: value
            }))
        },
        changeProductName: value => {
            dispatch(setSelectedPost({
                type: 'UPDATE_PRODUCT_NAME',
                value: value
            }))
        },
        changePrice: value => {
            dispatch(setSelectedPost({
                type: 'UPDATE_PRICE',
                value: value
            }))
        }
    }
})(UpdateForm)