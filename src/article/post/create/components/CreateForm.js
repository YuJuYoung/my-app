const CreateForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();

        var logined_id = props.logined_id;

        if (!logined_id) {
            alert("로그인 되어있지 않음")
        } else {
            props.onSubmit(
                {
                    title: e.target.title.value,
                    desc: e.target.desc.value
                },
                {
                    name: e.target.product_name.value,
                    price: e.target.price.value
                },
                logined_id
            )
        }
    }

    return (
        <div className="CreateForm">
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" name="title" placeholder="제목"/><br />
                <textarea name="desc" placeholder="내용"></textarea><br />
                <input type="text" name="product_name" placeholder="상품명"/><br />
                <input type="text" name="price" placeholder="가격"/><br />
                <input type="submit" value="제출"/>
            </form>
        </div>
    )
}

export default CreateForm;