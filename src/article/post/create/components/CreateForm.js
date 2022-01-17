const CreateForm = (props) => {
    return (
        <div className="CreateForm">
            <form>
                <input type="text" name="title" placeholder="제목"/><br />
                <textarea name="desc" placeholder="내용"></textarea><br />
                <input type="text" name="tag" placeholder="상품종류"/><br />
                <input type="submit" value="제출"/>
            </form>
        </div>
    )
}

export default CreateForm;