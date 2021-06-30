import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { deleteRecipe } from '../adapters/recipes'

class ShowRecipe extends Component {
  handleDelete = () => {
    this.props.updateLocalRecipe(this.props.recipe)
    this.props.deleteRecipe()
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="skeleton">
        <h1>ShowRecipe</h1>
        <h2>{this.props.recipe.name}</h2>
        <div className="left-aligned">
          <h3>Description</h3>
          <p>{this.props.recipe.description}</p>
          <h3>Ingredients</h3>
          <p className="newline-wrap">{this.props.recipe.ingredients}</p>
          <h3>Instructions</h3>
          <p className="newline-wrap">{this.props.recipe.instructions}</p>
        </div>
        <div>
          <Link to={`/recipes/${this.props.recipe.id}/edit`} className="linky">
            Edit Recipe
          </Link>
          <Link
            to="#"
            className={['linky', 'delete'].join(' ')}
            onClick={this.handleDelete}>
            Delete Recipe
          </Link>
        </div>
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
    deleteRecipe: () => dispatch(deleteRecipe()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowRecipe))
