import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expenses} = props
  return (
    <>
      <li className="balanceCSS eachCardList">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="imgAlter"
          alt="balance"
        />
        <div className="textAndNumber">
          <p className="textCSS">Your Balance</p>
          <p className="subTextCSS" data-testid="balanceAmount">
            Rs {parseInt(Balance)}
          </p>
        </div>
      </li>
      <li className="incomeCSS eachCardList">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="imgAlter"
          alt="income"
        />
        <div className="textAndNumber">
          <p className="textCSS">Your Income</p>
          <p className="subTextCSS" data-testid="incomeAmount">
            Rs {parseInt(Income)}
          </p>
        </div>
      </li>
      <li className="expensesCSS eachCardList">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="imgAlter"
          alt="expenses"
        />
        <div className="textAndNumber">
          <p className="textCSS">Your Expenses</p>
          <p className="subTextCSS" data-testid="expensesAmount">
            Rs {parseInt(Expenses)}
          </p>
        </div>
      </li>
    </>
  )
}
export default MoneyDetails
