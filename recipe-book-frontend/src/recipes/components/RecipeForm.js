import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class RecipeForm extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault()
  }

  state = {
    name: '',
    servings: 1,
    description: '',
    ingredients: '',
    instructions: '',
  }

  componentDidMount() {
    if (typeof this.props.recipe != 'undefined') {
      this.setState({
        name: this.props.recipe.name,
        servings: this.props.recipe.servings,
        description: this.props.recipe.description,
        ingredients: this.props.recipe.ingredients,
        instructions: this.props.recipe.instructions,
      })
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  render() {
    return (
      <div className="skeleton">
        <h1>RecipeForm</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Recipe name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="servings">Servings: </label>
            <input
              type="number"
              name="name"
              min="1"
              value={this.state.servings}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="ingredients">Ingredients: </label>
            <textarea
              rows="10"
              cols="40"
              name="ingredients"
              onChange={this.handleChange}
              value={this.state.ingredients}
            />
          </div>
          <div>
            <label htmlFor="instructions">Instructions: </label>
            <textarea
              rows="10"
              cols="60"
              name="instructions"
              onChange={this.handleChange}
              value={this.state.instructions}
            />
          </div>
          <div>
            <input type="submit" name="submit" value="submit" />
            <button onClick={this.props.history.goBack} className="delete">
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(RecipeForm)
