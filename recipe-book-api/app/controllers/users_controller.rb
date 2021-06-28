class UsersController < ApplicationController

  skip_before_action :authenticate, only: [:show, :create]

  #TODO: remove unneeded actions
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  #TODO: validate create
  def create
    @user = User.create(username: params[:username], password: params[:password])
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: {user: @user, jwt: @token}, status: :created
    else
      render json: {message: @user.errors}, status: :not_acceptable
    end
    
  end
    
  def update
    if is_own_user?
      @user.update(user_params)
      render json: @user
    else
      render json: {message: 'not authorized to modify this user'}, status: :unauthorized
    end
  end

  def destroy
    if is_own_user?
      @user.destroy
      render json: {message: 'user has been removed'}, status: :no_content
    else
      render json: {message: 'not authorized to modify this user'}, status: :unauthorized
    end
  end

  def is_own_user?
    @user = User.find_by(id: params[:id])
    @user && @user == current_user
  end

  def user_params
    params.require(:user).permit(:id, :username, :password, :email)
  end

end