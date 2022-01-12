import { connect } from 'react-redux'
import ChatList from '../components/ChatList'

export default connect((state) => {
    return {
        chats: [
            {
                id: 1,
                title: 'ㅇㅅㅇ!!!',
            },
            {
                id: 2,
                title: 'ㅇㅅㅇ?!!!'
            }
        ]
    }
})(ChatList)