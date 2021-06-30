import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './components/RecipeForm'
import { updateRecipe } from '../adapters/recipes'

class EditRecipe extends Component {
  handleSubmit = (state) => {
    this.props.updateLocalRecipe(state)
    this.props.updateRecipe()
  }
  render() {
    return (
      <div className="skeleton">
        <h1>Edit {this.props.recipe.name}</h1>
        <RecipeForm
          recipe={this.props.recipe}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipes.find((r) => r.id === ownProps.match.params.recipeId),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocalRecipe: (recipe) => {
      dispatch({ type: 'CREATE_HOLDER_RECIPE', recipe })
    },
    updateRecipe: () => dispatch(updateRecipe()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe)
