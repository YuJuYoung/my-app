import User from '../user/containers/User'
import Post from '../post/containers/Post'

const Article = (props) => {
    const logined = props.logined

    return (
        <div className='Article'>
            {logined ? <Post /> : <User />}
        </div>
    )
}

export default Article