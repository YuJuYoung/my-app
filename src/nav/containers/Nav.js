import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { toggleLoginState } from '../../article/articleSlice'

export default connect((state) => {
    return {
        getItems: state => state.nav.items,
        getLogined: state => state.article.logined,
        logout: (dispatch) => dispatch(toggleLoginState())
    }
})(Nav)