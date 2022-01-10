import { useSelector } from "react-redux";

const Title = (props) => {
    const title = useSelector(props.getTitle);

    return (
        <div className='Title'>
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Title;