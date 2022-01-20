const CreateForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();

        var logined_id = props.logined_id;

        if (!logined_id) {
            alert("로그인 되어있지 않음")
        } else {
            var title = e.target.title.value
            var desc = e.target.desc.value
            var tag = e.target.tag.value
    
            props.onSubmit(title, desc, tag, logined_id)
        }
    }

    return (
        <div className="CreateForm">
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" name="title" placeholder="제목"/><br />
                <textarea name="desc" placeholder="내용"></textarea><br />
                <input type="text" name="tag" placeholder="상품종류"/><br />
                <input type="submit" value="제출"/>
            </form>
        </div>
    )
}

export default CreateForm;