import React from 'react'

export default class TransactionList extends React.Component {
    componentDidMount() {
        this.props.initTransactionList(this.props.logined_id)
    }

    componentWillUnmount() {
        this.props.removeList()
    }

    handleAccept(e, transaction_id) {
        e.preventDefault()
        this.props.onAccept(transaction_id, this.props.logined_id)
    }

    handleReject(e, transaction_id) {
        e.preventDefault()
        this.props.onReject(transaction_id, this.props.logined_id)
    }

    render() {
        var list = this.props.list;

        if (!list) {
            list = <div>ㄱㄷ</div>
        } else if (list === 'NONE') {
            list = <div>글 없음</div>
        } else {
            list = list.map((transaction) => {
                return (
                    <p key={transaction.id}>
                        {transaction.amount}<br />
                        <button onClick={e => {this.handleAccept(e, transaction.id)}}>수락</button>
                        <button onClick={e => {this.handleReject(e, transaction.id)}}>거절</button>
                    </p>
                )
            })
        }

        return (
            <div className='TransactionList'>
                {list}
            </div>
        )
    }
}