import User from '../user/containers/User'
import Deal from '../deal/containers/Deal'

const Article = (props) => {
    const logined = props.logined

    return (
        <div className='Article'>
            {logined ? <Deal /> : <User />}
        </div>
    )
}

export default Article