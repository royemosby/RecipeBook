class RecipesController < ApplicationController

  skip_before_action :authenticate, only: [:index, :show]

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render json: @recipe
  end

  def create
    @recipe = Recipe.new(recipe_params)
    user.recipes << @recipe
    if user.save
      render json: @recipe, status: :created
    else
      render json: {message: "something went wrong"}
    end
  end

  def update
    if recipe_belongs_to_user?
      @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: {message: 'not authorized to modify this recipe'}, status: :unauthorized
    end
    
  end
  
  def destroy
    if recipe_belongs_to_user?
      @recipe.destroy
      render json: {success: 'recipe has been removed'}
    else
      render json: {message: 'not authorized to modify this recipe'}, status: :unauthorized
    end
  end

  def recipe_belongs_to_user?
    @recipe = Recipe.find_by(id: params[:recipe][:id])
    #byebug
    @recipe && @recipe.user == current_user
  end

  def recipe_params
    params.require(:recipe).permit(:id, :name, :description, :ingredients, :instructions, :servings, :user_id)
  end
end
