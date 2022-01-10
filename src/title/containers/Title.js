import { connect } from 'react-redux'
import Title from '../components/Title'

export default connect(state => {
    return {
        getTitle: state => state.title.value
    }
})(Title)