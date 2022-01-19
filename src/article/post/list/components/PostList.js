import { Link } from 'react-router-dom'

const PostList = (props) => {
    var list = props.list == null ? null : props.list.map(item => {
        return (
            <p key={item.id}>{item.title}</p>
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