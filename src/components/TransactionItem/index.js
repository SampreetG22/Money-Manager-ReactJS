import './index.css'

const TransactionItem = props => {
  const {details, deleteHistory} = props
  const {id, Title, Amount, Type} = details
  const deleteClick = () => {
    deleteHistory(id)
  }
  return (
    <ul className="indULlist">
      <li className="historyItem">{Title}</li>
      <li className="historyItem">{Amount}</li>
      <li className="historyItem">{Type}</li>
      <button
        onClick={deleteClick}
        data-testid="delete"
        type="button"
        className="deleteButton"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteBtn"
        />
      </button>
    </ul>
  )
}

export default TransactionItem
