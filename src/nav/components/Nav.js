import { Link } from 'react-router-dom'

const Nav = (props) => {
    const items = props.items;
    const logined_id = props.logined_id;
    const logined_user = props.logined_user;

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
                logined_id
                ? <div>
                    <p>{logined_user.nickname}</p>
                    <p>{logined_user.money}</p>
                    <Link to={"/users/" + logined_id + "/charge_money"}>충전</Link><br />
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