import { Link } from 'react-router-dom'

const PostList = (props) => {
    if (!props.list) {
        props.initPostList()
    }

    var list =
        !props.list
        ? <div>ㄱㄷ</div>
        : props.list.map(post => <Link key={post.id} to={"/posts/" + post.id}>{post.title}</Link>)

    return (
        <div className="PostList">
            {
                props.logined
                ? <p><Link to="/posts/create">글쓰기</Link></p>
                : null
            }
            {list}
        </div>
    )
}

export default PostList