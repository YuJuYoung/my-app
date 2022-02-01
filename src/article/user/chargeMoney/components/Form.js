import { useParams } from 'react-router-dom'

const Form = (props) => {
    const params = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(params.userId, parseInt(e.target.money.value), props.logined_id)
    }

    return (
        <div className="ChargeMoney_form">
            <form onSubmit={e => handleSubmit(e)}>
                <input type="number" name="money" placeholder="금액"/>
                <input type="submit" value="충전"/>
            </form>
        </div>
    )
}

export default Form