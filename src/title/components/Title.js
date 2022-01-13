const Title = (props) => {
    const title = props.title;

    return (
        <div className='Title'>
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Title;