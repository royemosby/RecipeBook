import React, { Component } from 'react'
import RecipeForm from './components/RecipeForm'

class NewRecipe extends Component {
  render() {
    return (
      <div>
        <h1>NewRecipe</h1>
        <RecipeForm />
      </div>
    )
  }
}

export default NewRecipe
