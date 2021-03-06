import React from 'react'

const AuthForm = (props) => {
  return (
    <div className="prez">
      <h1>Login to RecipeBook</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            required="required"
            value={props.userInfo.username}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            required="required"
            value={props.userInfo.password}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Login to RecipeBook" />
          <button type="button" onClick={props.handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
