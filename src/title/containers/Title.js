import { connect } from 'react-redux'
import Title from '../components/Title'

export default connect(state => {
    return {
        title: state.title.value
    }
})(Title)