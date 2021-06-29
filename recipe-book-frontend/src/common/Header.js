import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  console.dir(props)
  return (
    <div className="prez">
      <nav>
        <NavLink
          to="/"
          className="linky"
          exact
          onClick={props.closeLoginModal}
          activeStyle={{ background: 'lightblue' }}>
          Main
        </NavLink>
        {props.isLoggedIn ? showNewRecipe(props) : <></>}
        {props.isLoggedIn ? showProfile(props) : <></>}
        {!props.isLoggedIn ? showAuthNewUser(props) : <></>}
        {props.isLoggedIn ? showLogOut(props) : <></>}
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
    openLoginModal: () => dispatch({ type: 'OPEN_LOGIN_MODAL' }),
    closeLoginModal: () => dispatch({ type: 'CLOSE_LOGIN_MODAL' }),
    logout: () => dispatch({ type: 'LOG_OUT' }),
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.user.isLoggedIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
