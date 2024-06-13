import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

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

  updateTitle = event => this.setState({title: event.target.value})

  updateAmount = event => this.setState({amount: event.target.value})

  updateType = event => this.setState({type: event.target.value})

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const parsedAmount = parseInt(amount)
    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
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
  }

  //   deleteTransaction = (id, amount, type) => {
  //     const parsedAmount = parseInt(amount)
  //     this.setState(prevState => ({
  //       transactionsList: prevState.transactionsList.filter(
  //         eachTrans => eachTrans.id !== id,
  //       ),
  //       currentBalance:
  //         type === 'INCOME'
  //           ? prevState.currentBalance - parsedAmount
  //           : prevState.currentBalance + parsedAmount,
  //     }))
  //   }

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
        <div className="inner-container">
          {' '}
          <div className="name-container">
            <h1 className="main-heading">Hi, Faizullah</h1>
            <p className="message">
              Welcome back to your{' '}
              <span className="highlighted-text">Money Manager</span>
            </p>
          </div>
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
                <h1 className="form-heading">Add Transaction</h1>
                <div className="input-container">
                  <label htmlFor="titleInput" className="label">
                    TITLE
                  </label>
                  <input
                    type="text"
                    id="titleInput"
                    value={title}
                    onChange={this.updateTitle}
                    placeholder="TITLE"
                    className="input-field"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="amountInput" className="label">
                    AMOUNT
                  </label>
                  <input
                    type="text"
                    id="amountInput"
                    value={amount}
                    onChange={this.updateAmount}
                    placeholder="AMOUNT"
                    className="input-field"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="type" className="label">
                    TYPE
                  </label>
                  <select
                    id="type"
                    value={type}
                    onChange={this.updateType}
                    className="input-field"
                  >
                    <option value={transactionTypeOptions[0].optionId}>
                      {transactionTypeOptions[0].displayText}
                    </option>
                    <option value={transactionTypeOptions[1].optionId}>
                      {transactionTypeOptions[1].displayText}
                    </option>
                  </select>
                </div>
                <div className="button-container">
                  <button
                    type="button"
                    onClick={this.addTransaction}
                    className="button"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="history-list-heading-container">
                <p className="history-list-heading">Title</p>
                <p className="history-list-heading">Amount</p>
                <p className="history-list-heading">Type</p>
              </div>
              <ul>
                {' '}
                {transactionsList.map(eachTrans => (
                  <TransactionItem
                    key={eachTrans.id}
                    transactionDetails={eachTrans}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
