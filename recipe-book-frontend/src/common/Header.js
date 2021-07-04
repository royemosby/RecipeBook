import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div className="prez">
      <nav>
        <NavLink
          to="/"
          className="linky"
          exact
          onClick={props.closeLoginForm}
          activeStyle={{ background: 'lightblue' }}>
          Main
        </NavLink>
        {props.isLoggedIn ? showNewRecipe(props) : null}
        {props.isLoggedIn ? showProfile(props) : null}
        {!props.isLoggedIn ? showAuthNewUser(props) : null}
        {props.isLoggedIn ? showLogOut(props) : null}
      </nav>
    </div>
  )
}

const showNewRecipe = (props) => {
  return (
    <NavLink
      to="/recipes/new"
      className="linky"
      exact
      activeStyle={{ background: 'lightblue' }}>
      New Recipe
    </NavLink>
  )
}

const showProfile = (props) => {
  return (
    <NavLink
      to="/user"
      className="linky"
      exact
      activeStyle={{ background: 'lightblue' }}>
      Profile
    </NavLink>
  )
}

const showAuthNewUser = (props) => {
  return (
    <>
      <NavLink to="/" className="linky" exact onClick={props.openLoginForm}>
        Login
      </NavLink>
      <NavLink
        to="/user/new"
        className="linky"
        exact
        activeStyle={{ background: 'lightblue' }}>
        Register
      </NavLink>
    </>
  )
}

const showLogOut = (props) => {
  return (
    <NavLink
      to="/"
      className={['linky', 'logout'].join(' ')}
      exact
      onClick={props.logout}>
      Logout
    </NavLink>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    openLoginForm: () => dispatch({ type: 'OPEN_LOGIN_FORM' }),
    closeLoginForm: () => dispatch({ type: 'CLOSE_LOGIN_FORM' }),
    logout: () => dispatch({ type: 'LOG_OUT' }),
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.ui.isLoggedIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
