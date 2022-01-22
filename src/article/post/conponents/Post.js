import { Routes, Route } from 'react-router-dom'
import PostList from '../list/containers/PostList'
import CreateForm from '../create/containers/CreateForm'
import SelectedPost from '../selected-post/containers/SelectedPost'

const Post = (props) => {
    return (
        <div className="Post">
            <Routes>
                <Route path="/" element={<PostList />}/>
                <Route path="/create" element={<CreateForm />}/>
                <Route path="/:postId" element={<SelectedPost />}/>
            </Routes>
        </div>
    )
}

export default Post