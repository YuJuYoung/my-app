import { connect } from 'react-redux'
import Title from '../components/Title'

const mapStateToProps = (state) => {
    return {
        title: state.title.value
    }
}

export default connect(mapStateToProps)(Title)