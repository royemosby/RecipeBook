import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './components/RecipeForm'

class EditRecipe extends Component {
  render() {
    return <h1>Edit {this.props.recipe.name}</h1>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipes.find((r) => r.id === ownProps.match.params.recipeId),
  }
}

export default connect(mapStateToProps)(EditRecipe)
