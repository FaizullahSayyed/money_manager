import './index.css'

const MoneyDetails = props => {
  const {currentBalance, income, expenses} = props
  return (
    <div className="money-details-container">
      <div className="amount-container balance-container">
        <div className="balance-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="category-image"
          />
        </div>
        <div className="text-container">
          <div>
            {' '}
            <p>Your Balance</p>
            <p className="rupees" data-testid="balanceAmount">
              Rs {currentBalance}
            </p>
          </div>
        </div>
      </div>
      <div className="amount-container income-container">
        <div className="income-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="category-image"
          />
        </div>
        <div className="text-container">
          <div>
            <p>Your Income</p>
            <p className="rupees" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
      </div>
      <div className="amount-container expenses-container">
        <div className="expenses-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="category-image"
          />
        </div>
        <div className="text-container">
          <div>
            <p>Your Expenses</p>
            <p className="rupees" data-testid="expensesAmount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
