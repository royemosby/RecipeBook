import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeCard from './components/RecipeCard'
import { withRouter } from 'react-router-dom'

class IndexRecipes extends Component {
  renderRecipeCards = () => {
    return this.props.recipes.map((r, idx) => {
      return <RecipeCard key={idx} recipe={r} />
    })
  }

  render() {
    return (
      <div className="skeleton">
        {this.redirectWhenLoggedOut(this.props)}
        <h1>IndexRecipes</h1>
        {this.renderRecipeCards()}
      </div>
    )
  }
  redirectWhenLoggedOut = (props) => {
    if (!props.isLoggedIn) {
      props.history.push('/')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps)(withRouter(IndexRecipes))
