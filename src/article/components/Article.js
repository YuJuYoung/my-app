import User from '../user/containers/User'
import Post from '../post/containers/Post'
import { Routes, Route } from 'react-router-dom'

const Article = (props) => {
    return (
        <div className='Article'>
            <Routes>
                <Route exac path="/" element={<div className='default'>ㅇㅅㅇ</div>}/>
                <Route path="/posts/*" element={<Post />}/>
                <Route path="/users/*" element={<User />}/>
            </Routes>
        </div>
    )
}

export default Article