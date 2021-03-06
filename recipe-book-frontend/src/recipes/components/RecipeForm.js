import React from 'react'
import { Link } from 'react-router-dom'

const RecipeForm = (props) => {
  return (
    <div className="prez">
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="name">Recipe name: </label>
          <input
            type="text"
            name="name"
            required="required"
            value={props.recipeInfo.name}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="servings">Servings: </label>
          <input
            type="number"
            name="servings"
            required="required"
            min="1"
            value={props.recipeInfo.servings}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            required="required"
            value={props.recipeInfo.description}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea
            rows="10"
            cols="40"
            name="ingredients"
            required="required"
            value={props.recipeInfo.ingredients}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions: </label>
          <textarea
            rows="10"
            cols="60"
            name="instructions"
            value={props.recipeInfo.instructions}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input type="submit" name="submit" value="submit" />
          <Link to="/">
            <button className="delete">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm
