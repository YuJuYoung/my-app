import User from '../user/components/User'

const Article = (props) => {
    const logined = props.logined

    return (
        <div className='Article'>
            {logined ? null : <User />}
        </div>
    )
}

export default Article