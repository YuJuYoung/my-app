import { Link } from 'react-router-dom'

const Nav = (props) => {
    const list = props.items.map(item =>
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