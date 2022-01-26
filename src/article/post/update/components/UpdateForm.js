import { useParams } from 'react-router-dom'

const UpdateForm = (props) => {
    var params = useParams();
    var postId = params.postId;
    var post = props.post;
    var form;

    if (!post) {
        props.initSelectedPost(postId)
    }

    const handleSubmit = e => {
        e.preventDefault()

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

    if (!post) {
        form = <div>ㄱㄷ</div>
    } else if (post === 'NONE') {
        form = <div>없는 글</div>
    } else {
        form = <form onSubmit={e => handleSubmit(e)}>
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
        <div className="UpdateForm">
            {form}
        </div>
    )
}

export default UpdateForm