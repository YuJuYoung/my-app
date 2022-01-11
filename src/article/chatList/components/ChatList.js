const chatList = (props) => {
    const chats = props.chats;

    const chatList = chats.map(chat =>
        <p>{chat.users[0]}</p>
    )

    return (
        <div className="chatList">
            {chatList}
        </div>
    )
}

export default chatList;