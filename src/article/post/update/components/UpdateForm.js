import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateForm = (props) => {
    const params = useParams()

    return (
        <div className='UpdateForm'>
            <WrappedUpdateForm params={params} received={props}/>
        </div>
    )
}

class WrappedUpdateForm extends React.Component {
    componentDidMount() {
        this.props.received.initSelectedPost(this.props.params.postId)
    }

    componentWillUnmount() {
        this.props.received.removeSelectedPost()
    }

    handleSubmit(e) {
        e.preventDefault()

        var props = this.props.received;
        var postId = this.props.params.postId

        props.onSubmit(
            {
                title: e.target.title.value,
                desc: e.target.desc.value
            },
            {
                name: e.target.product_name.value,
                price: e.target.price.value
            },
            props.logined_id,
            postId
        )
    }

    render() {
        var props = this.props.received;

        var post = props.post;
        var form;
    
        if (!post) {
            form = <div>ㄱㄷ</div>
        } else if (post === 'NONE') {
            form = <div>없는 글</div>
        } else {
            form = <form onSubmit={e => this.handleSubmit(e)}>
                <input type="text" name="title" placeholder="제목" value={post.title} onChange={
                    e => props.changeTitle(e.target.value)
                }/><br />
                <textarea name="desc" placeholder="내용" value={post.desc} onChange={
                    e => props.changeDESC(e.target.value)
                }></textarea><br />
                <input type="text" name="product_name" placeholder="상품명" value={post.product_name} onChange={
                    e => props.changeProductName(e.target.value)
                }/><br />
                <input type="number" name="price" placeholder="가격" value={post.price} onChange={
                    e => props.changePrice(e.target.value)
                }/><br />
                <input type="submit" value="제출"/>
            </form>
        }

        return (
            <div className="form">
                {form}
            </div>
        )
    }
}

export default UpdateForm