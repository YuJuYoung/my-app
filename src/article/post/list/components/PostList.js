import { Link } from 'react-router-dom'

const PostList = (props) => {
    if (!props.list) {
        props.initPostList()
    }

    var list =
        !props.list
        ? <div>ㄱㄷ</div>
        : props.list.map(post => {
        return (
            <p key={post.id}>
                <Link to={"/posts/" + post.id}>{post.title}</Link>
                <br />{post.tag}
            </p>
        )
    })

    return (
        <div className="PostList">
            {
                props.logined
                ? <Link to="/posts/create">글쓰기</Link>
                : null
            }
            {list}
        </div>
    )
}

export default PostList