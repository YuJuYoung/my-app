import { Routes, Route } from 'react-router-dom'
import PostList from '../list/containers/PostList'

const Post = (props) => {
    return (
        <div className="Post">
            <Routes>
                <Route path="/" element={<PostList />}/>
            </Routes>
        </div>
    )
}

export default Post