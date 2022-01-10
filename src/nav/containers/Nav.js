import { connect } from 'react-redux'
import Nav from '../components/Nav'

export default connect((state) => {
    return {
        getItems: state => state.nav.items
    }
})(Nav)