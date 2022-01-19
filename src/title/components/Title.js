import { Link } from 'react-router-dom'

const Title = (props) => {
    const title = props.title;

    return (
        <div className='Title'>
            <Link to="/">
                <h1 className='title'>{title}</h1>
            </Link>
        </div>
    )
}

export default Title;