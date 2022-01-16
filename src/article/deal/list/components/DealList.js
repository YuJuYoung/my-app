const DealList = (props) => {
    var list = props.list.map(item => {
        return (
            <p key={item.id}>{item.title}</p>
        )
    })

    return (
        <div className="DealList">
            {list}
        </div>
    )
}

export default DealList