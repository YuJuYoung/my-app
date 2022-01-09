const LoginForm = (props) => {
    const handelSubmit = (e) => {
        e.preventDefault();

        var id = e.target.id.value;
        var pwd = e.target.pwd.value;
        props.onSubmit(id, pwd);
    }

    return (
        <div clssName='LoginForm'>
            <form onSubmit={e => handelSubmit(e)}>
                <input type="text" name="id" placeholder="아이디 입력" /><br />
                <input type="password" name="pwd" placeholder="패스워드 입력" /><br />
                <input type="submit" value="로그인" />
            </form>
        </div>
    )
}

export default LoginForm