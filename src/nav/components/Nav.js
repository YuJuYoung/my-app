import { Link } from 'react-router-dom'

const Nav = (props) => {
    const items = props.items;
    const logined = props.logined;

    const list = items.map(item =>
        <li key={item.value}>
            <Link to={item.path}>{item.value}</Link>
        </li>
    )

    return (
        <div className='Nav'>
            {
                logined
                ? <button onClick={e => props.logout()}>로그아웃</button>
                : null
            }
            <ul>{list}</ul>
        </div>
    )
}

export default Nav