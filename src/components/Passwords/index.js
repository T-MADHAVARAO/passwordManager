import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordsItem'
import './index.css'

class Passwords extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    isShow: false,
  }

  changeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  changeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  changePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  changeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    if (websiteInput.length > 0) {
      const newPassword = {
        id: uuidv4(),
        website: websiteInput,
        userName: userNameInput,
        password: passwordInput,
      }
      this.setState(old => ({
        passwordsList: [...old.passwordsList, newPassword],
        websiteInput: '',
        userNameInput: '',
        passwordInput: '',
      }))
    }
  }

  showPassword = () => {
    this.setState(old => ({isShow: !old.isShow}))
  }

  deletePassword = id => {
    this.setState(old => ({
      passwordsList: old.passwordsList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {
      passwordsList,
      websiteInput,
      userNameInput,
      passwordInput,
      searchInput,
      isShow,
    } = this.state
    const updatedList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = updatedList.length

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="webLogo"
        />
        <div className="userCont">
          <div className="userInputs">
            <h1 className="userHead">Add New Password</h1>
            <form onSubmit={this.addPassword}>
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="inputIcon"
                />
                <input
                  className="inputBar"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.changeWebsite}
                  value={websiteInput}
                />
              </div>
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="userName"
                  className="inputIcon"
                />
                <input
                  className="inputBar"
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.changeUserName}
                  value={userNameInput}
                />
              </div>
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="inputIcon"
                />
                <input
                  className="inputBar"
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.changePassword}
                  value={passwordInput}
                />
              </div>
              <div className="btnAlign">
                <button type="submit" className="btnPrimary">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="userImg"
          />
        </div>
        <div className="saved">
          <div className="savedHead">
            <div className="countHead">
              <h1>Your Passwords</h1>
              <div className="count">
                <p>{count}</p>
              </div>
            </div>
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="searchIcon"
              />
              <input
                onChange={this.changeSearch}
                type="search"
                placeholder="search"
                className="searchBar"
              />
            </div>
          </div>
          <hr />
          <div className="checkBoxSec">
            <div className="checkBoxCont">
              <input
                id="Show Passwords"
                type="checkbox"
                onChange={this.showPassword}
              />
              <label htmlFor="Show Passwords">Show Passwords</label>
            </div>
          </div>

          {count > 0 ? (
            <ul>
              {updatedList.map(each => (
                <PasswordItem
                  deletePassword={this.deletePassword}
                  eachItem={each}
                  key={each.id}
                  isShow={isShow}
                />
              ))}
            </ul>
          ) : (
            <div className="empty">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="emptyImg"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Passwords
