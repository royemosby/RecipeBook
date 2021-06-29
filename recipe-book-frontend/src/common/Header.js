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
        <NavLink
          to="/"
          className="linky"
          exact
          onClick={props.toggleLoginModal}>
          Login
        </NavLink>
        <NavLink
          to="/user/new"
          className="linky"
          exact
          activeStyle={{ background: 'lightblue' }}>
          Register
        </NavLink>
        <NavLink to="/" className={['linky', 'logout'].join(' ')} exact>
          Logout
        </NavLink>
      </nav>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoginModal: () => dispatch({ type: 'TOGGLE_LOGIN_MODAL' }),
  }
}

export default connect(null, mapDispatchToProps)(Header)
