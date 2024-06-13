import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onClickDeleteTransaction = () => {
    deleteTransaction(id, amount, type)
  }

  return (
    <li className="list-item-container">
      <p className="list-text">{title}</p>
      <p className="list-text">Rs {amount}</p>
      <p className="list-text">{type === 'INCOME' ? 'Income' : 'Expenses'}</p>
      <button
        type="button"
        onClick={onClickDeleteTransaction}
        className="delete-button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
