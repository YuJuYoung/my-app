import { connect } from 'react-redux'
import CreateForm from '../components/CreateForm'

export default connect(null, dispatch => {
    return {
        onSubmit: (title, desc, tag) => {
            
        }
    }
})(CreateForm);