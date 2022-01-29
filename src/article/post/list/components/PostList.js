import React from 'react'
import { Link } from 'react-router-dom'

export default class PostList extends React.Component {
    componentDidMount() {
        this.props.initPostList()
    }

    render() {
        var list = this.props.list

        if (!list) {
            list = <div>ㄱㄷ</div>
        } else if (list === 'NONE') {
            list = <div>글 없음</div>
        } else {
            list = list.map(post => {
                return (
                    <p key={post.id}>
                        <Link to={"/posts/" + post.id}>{post.title}</Link>
                    </p>
                )
            })
        }

        return (
            <div className="PostList">
                {
                    this.props.logined
                    ? <p><Link to="/posts/create">글쓰기</Link></p>
                    : null
                }
                {list}
            </div>
        )
    }
}