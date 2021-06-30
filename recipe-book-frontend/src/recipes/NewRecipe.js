import React, { Component } from 'react'
import RecipeForm from './components/RecipeForm'
import { connect } from 'react-redux'
import { createRecipe } from '../adapters/recipes'
import { withRouter } from 'react-router-dom'

class NewRecipe extends Component {
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.updateLocalRecipe(this.state)
    this.props.createRecipe()
    this.props.history.push('/')
  }

  state = {
    name: '',
    servings: 1,
    description: '',
    ingredients: '',
    instructions: '',
    id: '',
  }

  render() {
    return (
      <div className="skeleton">
        <h1>New Recipe</h1>
        <RecipeForm
          recipeInfo={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocalRecipe: (recipe) => {
      dispatch({ type: 'CREATE_HOLDER_RECIPE', recipe })
    },
    createRecipe: () => dispatch(createRecipe()),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(NewRecipe))
