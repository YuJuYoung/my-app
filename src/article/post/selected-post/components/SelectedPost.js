import { useParams } from 'react-router-dom'

const Selected = (props) => {
    var params = useParams()
    var post = props.post;

    if (!post) {
        props.initSelectedPost(params.postId);
    }

    return (
        <div className="SelectedPost">
            {
                !post
                ? <p>ㄱㄷ</p>
                : <div>
                    <h2>{post.title}</h2>
                    <p>{post.desc}</p>
                </div>
            }
        </div>
    )
}

export default Selected