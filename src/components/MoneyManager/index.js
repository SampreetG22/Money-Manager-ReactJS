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
    Bal: 0,
    Inc: 0,
    Exp: 0,
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onAddBtn = () => {
    const {title, amount, type, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    if (title !== '' && amount !== '') {
      const newHistory = {
        id: v4(),
        Title: title,
        Amount: amount,
        Type: displayText,
      }
      this.setState(prevState => ({
        title: '',
        amount: '',
        historyList: [...prevState.historyList, newHistory],
      }))
      if (type === 'Income') {
        this.setState(prevState => ({
          Inc: prevState.Inc + parseInt(amount),
          Bal: prevState.Bal + parseInt(amount),
        }))
      } else {
        this.setState(prevState => ({
          Exp: prevState.Exp + parseInt(amount),
          Bal: prevState.Bal - parseInt(amount),
        }))
      }
    }
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({optionId: event.target.value})
  }

  deleteHistory = ID => {
    const {historyList} = this.state
    const filteredList = historyList.filter(each => each.id !== ID)
    this.setState({historyList: filteredList})
    const deletedElement = historyList.filter(each => each.id === ID)
    const {Amount, Type} = deletedElement[0]
    if (Type === 'Income') {
      this.setState(prevState => ({
        Inc: prevState.Inc - parseInt(Amount),
        Bal: prevState.Bal - parseInt(Amount),
      }))
    } else {
      this.setState(prevState => ({
        Exp: prevState.Exp - parseInt(Amount),
        Bal: prevState.Bal + parseInt(Amount),
      }))
    }
  }

  render() {
    const {Bal, Inc, Exp, title, amount, historyList, optionId} = this.state
    return (
      <div className="mainContainer">
        <div className="cardContainer1">
          <h1 className="mainHead">Hi, Richard</h1>
          <p className="mainPara">
            Welcome back to your <span className="spanCSS">Money Manager</span>
          </p>
        </div>
        <ul className="cardContainer2">
          <MoneyDetails Balance={Bal} Income={Inc} Expenses={Exp} />
        </ul>
        <div className="container3">
          <div className="addTransactionContainer">
            <h1 className="addTransacHead">Add Transaction</h1>

            <label htmlFor="title" className="labelCSS">
              TITLE
            </label>
            <input
              onChange={this.onTitleChange}
              className="inputBoxCSS"
              placeholder="TITLE"
              id="title"
              value={title}
            />

            <label htmlFor="amount" className="labelCSS">
              AMOUNT
            </label>
            <input
              onChange={this.onAmountChange}
              className="inputBoxCSS"
              placeholder="AMOUNT"
              id="amount"
              value={amount}
            />

            <label htmlFor="types" className="labelCSS">
              TYPE
            </label>
            <select
              id="select"
              className="inputBoxCSS"
              value={optionId}
              onChange={this.onTypeChange}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button className="addBtn" onClick={this.onAddBtn} type="button">
              Add
            </button>
          </div>
          <div className="historyContainer">
            <h1 className="addTransacHead">History</h1>
            <div className="historyContainer2">
              <ul className="tableHeads">
                <p className="tableTitle">Title</p>
                <p className="tableTitle">Amount</p>
                <p className="tableTitle">Type</p>
              </ul>
              {historyList.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
