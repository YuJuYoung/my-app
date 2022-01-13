import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { setLoginState } from '../../article/articleSlice'

export default connect(state => {
    return {
        items: state.nav.items,
        logined: state.article.logined_id
    }
}, dispatch => {
    return {
        logout: () => dispatch(setLoginState({
            type: 'LOGOUT'
        }))
    }
})(Nav)