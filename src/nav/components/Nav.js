import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = (props) => {
    const items = useSelector(props.getItems);
    const list = items.map(item =>
        <li key={item.value}>
            <Link to={item.path}>{item.value}</Link>
        </li>
    )

    return (
        <div className='Nav'>
            <ul>{list}</ul>
        </div>
    )
}

export default Nav