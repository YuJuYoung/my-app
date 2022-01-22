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
                    <p><h2>{post.title}</h2></p>
                    <p>{post.desc}</p>
                    <p>{post.tag}</p>
                </div>
            }
        </div>
    )
}

export default Selected