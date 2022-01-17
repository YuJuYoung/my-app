import { Routes, Route } from 'react-router-dom'
import PostList from '../list/containers/PostList'
import CreateForm from '../create/containers/CreateForm'

const Post = (props) => {
    return (
        <div className="Post">
            <Routes>
                <Route path="/" element={<PostList />}/>
                <Route path="/posts/create" element={<CreateForm />}/>
            </Routes>
        </div>
    )
}

export default Post