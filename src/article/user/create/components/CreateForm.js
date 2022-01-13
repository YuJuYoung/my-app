const CreateForm = (props) => {
    const handelSubmit = (e) => {
        e.preventDefault();

        var email = e.target.email.value;
        var pwd = e.target.pwd.value;
        var nickname = e.target.nickname.value;
        props.onSubmit(email, pwd, nickname);
    }
    return (
        <div className="CreateForm">
            <form onSubmit={e => handelSubmit(e)}>
                <input type="email" name="email" placeholder="이메일 입력"/><br />
                <input type="password" name="pwd" placeholder="패스워드 입력"/><br />
                <input type="text" name="nickname"/><br />
                <input type="submit" value="회원가입"/>
            </form>
        </div>
    )
}