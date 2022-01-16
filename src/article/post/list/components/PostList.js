const PostList = (props) => {
    var list = props.list == null ? null : props.list.map(item => {
        return (
            <p key={item.id}>{item.title}</p>
        )
    })

    return (
        <div className="PostList">
            {list}
        </div>
    )
}

export default PostList