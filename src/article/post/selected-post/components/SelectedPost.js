import { useParams, Link } from 'react-router-dom'

const Selected = (props) => {
    var params = useParams()
    var post = props.post;
    var postId = params.postId;
    var logined_id = props.logined_id;

    if (!post) {
        props.initSelectedPost(postId)
    }

    if (!post) {
        post = <p>ㄱㄷ</p>
    } else if (post === 'NONE') {
        post = <p>없음</p>
    } else {
        post = <div>
            <h2>제목: {post.title}</h2>
            <p>내용: {post.desc}</p>
            <p>제품명: {post.product_name}</p>
            <p>가격: {post.price}</p>
            {
                post.user_id === logined_id
                ? <p>
                    <Link to={"/posts/" + postId + "/update"}>수정</Link>
                    <button onClick={e => props.deletePost(postId, logined_id)}>삭제</button>
                </p>
                : null
            }
            {
                logined_id && post.user_id !== logined_id
                ? <button onClick={e => props.buyProduct(logined_id, postId)}>구매</button>
                : null
            }
        </div>
    }

    return (
        <div className="SelectedPost">
            {post}
        </div>
    )
}

export default Selected