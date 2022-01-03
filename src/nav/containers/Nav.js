import { connect } from 'react-redux'
import Nav from '../components/Nav'

const mapStateToProps = (state) => {
    return {
        items: state.nav.items
    }
}

export default connect(mapStateToProps)(Nav)