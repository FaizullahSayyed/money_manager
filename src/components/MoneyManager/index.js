import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    currentBalance: 0,
    income: 0,
    expenses: 0,
    transactionsList: [],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: event.target.value})
  }

  updateType = event => {
    this.setState({type: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const parsedAmount = parseInt(amount)
    const newTransaction = {
      id: v4(),
      title,
      amount,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: 'INCOME',
      currentBalance:
        type === 'INCOME'
          ? prevState.currentBalance + parsedAmount
          : prevState.currentBalance - parsedAmount,
      income:
        type === 'INCOME' ? prevState.income + parsedAmount : prevState.income,
      expenses:
        type === 'EXPENSES'
          ? prevState.expenses + parsedAmount
          : prevState.expenses,
    }))
  }

  deleteTransaction = (id, amount, type) => {
    const parsedAmount = parseInt(amount)
    console.log('before modifieng state', this.state)
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTrans => eachTrans.id !== id,
      ),
      currentBalance:
        type === 'INCOME'
          ? prevState.currentBalance - parsedAmount
          : prevState.currentBalance + parsedAmount,
      income:
        type === 'INCOME' ? prevState.income - parsedAmount : prevState.income,
      expenses:
        type === 'EXPENSES'
          ? prevState.expenses - parsedAmount
          : prevState.expenses,
    }))
    console.log('after modifieng state', this.state)
  }

  render() {
    const {
      currentBalance,
      income,
      expenses,
      transactionsList,
      title,
      amount,
      type,
    } = this.state
    return (
      <div className="bg-container">
        <div className="money-details-container">
          {' '}
          <MoneyDetails
            currentBalance={currentBalance}
            income={income}
            expenses={expenses}
          />
        </div>
        <div className="form-history-container">
          <div className="form-container">
            <form>
              <input type="text" value={title} onChange={this.updateTitle} />
              <input
                type="number"
                value={amount}
                onChange={this.updateAmount}
              />
              <select id="type" value={type} onChange={this.updateType}>
                {transactionTypeOptions.map(eachTypeOption => (
                  <option
                    key={eachTypeOption.optionId}
                    value={eachTypeOption.optionId}
                  >
                    {eachTypeOption.displayText}
                  </option>
                ))}
              </select>
              <button type="button" onClick={this.addTransaction}>
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            {transactionsList.map(eachTrans => (
              <TransactionItem
                key={eachTrans.id}
                transactionDetails={eachTrans}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
