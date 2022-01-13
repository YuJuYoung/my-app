const LoginForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        var email = e.target.email.value;
        var pwd = e.target.pwd.value;
        props.onSubmit(email, pwd);
    }

    return (
        <div className='LoginForm'>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="email" name="email" placeholder="이메일 입력" /><br />
                <input type="password" name="pwd" placeholder="패스워드 입력" /><br />
                <input type="submit" value="로그인" />
            </form>
        </div>
    )
}

export default LoginForm