import React from 'react'

export default class TransactionList extends React.Component {
    componentDidMount() {
        this.props.initTransactionList(this.props.logined_id)
    }

    componentWillUnmount() {
        this.props.removeList()
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
                        {transaction.amount}
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