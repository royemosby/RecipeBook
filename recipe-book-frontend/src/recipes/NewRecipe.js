import React, { Component } from 'react'
import RecipeForm from './components/RecipeForm'
import { connect } from 'react-redux'
import { createRecipe } from '../adapters/recipes'

class NewRecipe extends Component {
  handleSubmit = (state) => {
    this.props.updateLocalRecipe(state)
    this.props.createRecipe()
  }

  render() {
    return (
      <div className="skeleton">
        <h1>New Recipe</h1>
        <RecipeForm handleSubmit={this.handleSubmit} />
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

export default connect(null, mapDispatchToProps)(NewRecipe)
