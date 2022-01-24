import { useParams } from 'react-router-dom'

const Selected = (props) => {
    var params = useParams()
    var post = props.post;

    if (!post) {
        props.initSelectedPost(params.postId);
    }

    return (
        <div className="SelectedPost">
            {
                !post
                ? <p>ㄱㄷ</p>
                : <div>
                    <h2>제목: {post.title}</h2>
                    <p>내용: {post.desc}</p>
                    <p>제품명: {post.product_name}</p>
                    <p>가격: {post.price}</p>
                </div>
            }
        </div>
    )
}

export default Selected