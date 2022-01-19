const CreateForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();

        var title = e.target.title.value
        var desc = e.target.title.desc
        var tag = e.target.title.tag
        props.onSubmit(title, desc, tag)
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