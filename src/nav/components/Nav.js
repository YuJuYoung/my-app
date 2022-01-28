import { Link } from 'react-router-dom'

const Nav = (props) => {
    const items = props.items;
    const logined = props.logined;
    const logined_nickname = props.logined_nickname;

    const list = items.map(item =>
        <li key={item.value}>
            <Link to={item.path}>{item.value}</Link>
        </li>
    )

    const logout = (e) => {
        e.preventDefault();
        props.logout();
    }

    return (
        <div className='Nav'>
            {
                logined
                ? <div>
                    <p>{logined_nickname}</p>
                    <button onClick={e => logout(e)}>로그아웃</button><br />
                    <Link to="/transactions">거래 목록</Link>
                </div>
                : <Link to="/users/login">로그인</Link>
            }
            <ul>{list}</ul>
        </div>
    )
}

export default Nav