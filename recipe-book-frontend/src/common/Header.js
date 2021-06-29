import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div className="prez">
      <h1>Header</h1>
      <nav>
        <NavLink
          to="/"
          className="linky"
          exact
          onClick={props.closeLoginModal}
          activeStyle={{ background: 'lightblue' }}>
          Main
        </NavLink>
        <NavLink
          to="/recipes/new"
          className="linky"
          exact
          activeStyle={{ background: 'lightblue' }}>
          New Recipe
        </NavLink>
        <NavLink
          to="/user"
          className="linky"
          exact
          activeStyle={{ background: 'lightblue' }}>
          Profile
        </NavLink>
        <NavLink to="/" className="linky" exact onClick={props.openLoginModal}>
          Login
        </NavLink>
        <NavLink
          to="/user/new"
          className="linky"
          exact
          activeStyle={{ background: 'lightblue' }}>
          Register
        </NavLink>
        <NavLink
          to="/"
          className={['linky', 'logout'].join(' ')}
          exact
          onClick={props.logout}>
          Logout
        </NavLink>
      </nav>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    openLoginModal: () => dispatch({ type: 'OPEN_LOGIN_MODAL' }),
    closeLoginModal: () => dispatch({ type: 'CLOSE_LOGIN_MODAL' }),
    logout: () => dispatch({ type: 'LOG_OUT' }),
  }
}

export default connect(null, mapDispatchToProps)(Header)
