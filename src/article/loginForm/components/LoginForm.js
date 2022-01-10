import { useDispatch } from 'react-redux'

const LoginForm = (props) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        var id = e.target.id.value;
        var pwd = e.target.pwd.value;
        props.onSubmit(id, pwd, dispatch);
    }

    return (
        <div className='LoginForm'>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name="id" placeholder="아이디 입력" /><br />
                <input type="password" name="pwd" placeholder="패스워드 입력" /><br />
                <input type="submit" value="로그인" />
            </form>
        </div>
    )
}

export default LoginForm