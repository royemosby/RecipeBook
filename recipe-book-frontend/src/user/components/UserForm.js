import React, { Component } from 'react'

class UserForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
    }
    render() {
        return (
            <div className="prez">
                <h1>UserForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.password}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="text"
                            name="password"
                            value={this.props.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Register with RecipeBook" />
                        <button type="button" onClick={this.handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm
