import { connect } from 'react-redux'
import ChatList from '../components/ChatList'

export default connect((state) => {
    return {
        chats: [
            {
                id: 1,
                users: ['오징어', '만두', '감자리', '김'],
            },
            {
                id: 2,
                users: ['고로롱', '김부식', '로로롱', '귀찮맨']
            }
        ]
    }
})(ChatList)