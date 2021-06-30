import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './components/RecipeForm'

class EditRecipe extends Component {
  handleSubmit = (state) => {
    //do the thing with dispatch
  }
  render() {
    return (
      <div className="skeleton">
        <h1>Edit {this.props.recipe.name}</h1>
        <RecipeForm recipe={this.props.recipe} />
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
  return {}
}

export default connect(mapStateToProps)(EditRecipe)
