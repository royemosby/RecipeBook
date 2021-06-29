import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <div className="prez">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </div>
    </Link>
  )
}

export default RecipeCard
