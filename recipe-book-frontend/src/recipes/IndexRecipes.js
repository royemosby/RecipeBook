import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeCard from './components/RecipeCard'

class IndexRecipes extends Component {
  renderRecipeCards = () => {
    return this.props.recipes.map((r, idx) => {
      return <RecipeCard key={idx} recipe={r} />
    })
  }

  render() {
    return (
      <div className="prez">
        <h1>All Recipes</h1>
        {this.renderRecipeCards()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps)(IndexRecipes)
