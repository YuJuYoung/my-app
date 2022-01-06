const LoginForm = (props) => {
    return (
        <div clssName='LoginForm'>
            <form action="/login" method="post">
                <input type="text" name="id" placeholder="아이디 입력" /><br />
                <input type="password" name="pwd" placeholder="패스워드 입력" /><br />
                <input type="submit" value="제출" />
            </form>
        </div>
    )
}

export default LoginForm