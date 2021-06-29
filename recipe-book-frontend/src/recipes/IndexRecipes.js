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
      <div className="skeleton">
        <h1>IndexRecipes</h1>
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
