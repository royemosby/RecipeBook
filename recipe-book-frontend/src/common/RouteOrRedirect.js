import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const RouteOrRedirect = (props) => {
  return (
    <div>
      {isMatch(props) ? (
        <Route path={props.path} component={props.component} />
      ) : (
        <>{handleRedirect(props)}</>
      )}
    </div>
  )
}

const handleRedirect = (props) => {
  return <Redirect to="/">{props.recipeNotFound()}</Redirect>
}

const isMatch = (props) => {
  const targetRecipe = props.computedMatch.params.recipeId
  const matched = props.recipes.some((recipe) => {
    return recipe.id === targetRecipe
  })
  return matched
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { recipeNotFound: () => dispatch({ type: 'RECIPE_NOT_FOUND' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteOrRedirect)
