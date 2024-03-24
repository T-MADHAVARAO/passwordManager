import './index.css'

const PasswordItem = props => {
  const {eachItem, isShow, deletePassword} = props
  const {website, userName, password, id} = eachItem
  const onDeletePassword = () => {
    deletePassword(id)
  }
  return (
    <li className="eachItem">
      <div className="content">
        <div className="profile">{website[0].toUpperCase()}</div>
        <div>
          <p>{website}</p>
          <p>{userName}</p>
          {isShow ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={onDeletePassword}
        className="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete icon"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
