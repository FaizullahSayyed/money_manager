const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onClickDeleteTransaction = () => {
    deleteTransaction(id, amount, type)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" onClick={onClickDeleteTransaction}>
        delete
      </button>
    </li>
  )
}

export default TransactionItem
