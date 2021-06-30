import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './components/RecipeForm'
import { updateRecipe } from '../adapters/recipes'
import { withRouter } from 'react-router-dom'

class EditRecipe extends Component {
  state = {
    name: '',
    servings: 1,
    description: '',
    ingredients: '',
    instructions: '',
    id: '',
  }

  componentDidMount() {
    this.setState({
      name: this.props.recipe.name,
      servings: this.props.recipe.servings,
      description: this.props.recipe.description,
      ingredients: this.props.recipe.ingredients,
      instructions: this.props.recipe.instructions,
      id: this.props.recipe.id,
    })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.updateLocalRecipe(this.state)
    this.props.updateRecipe()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="skeleton">
        <h1>Edit {this.props.recipe.name}</h1>
        <RecipeForm
          recipeInfo={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditRecipe))
