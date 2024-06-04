const MoneyDetails = props => {
  const {currentBalance, income, expenses} = props
  return (
    <div>
      <p className="current-balance">{currentBalance}</p>
      <p className="income">{income}</p>
      <p className="expenses">{expenses}</p>
    </div>
  )
}
export default MoneyDetails
