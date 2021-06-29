import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ShowRecipe extends Component {
  handleDelete = () => {
    alert('fake d3l3t0rz')
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

export default connect(mapStateToProps)(ShowRecipe)
