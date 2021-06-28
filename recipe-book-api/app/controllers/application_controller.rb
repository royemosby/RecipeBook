class ApplicationController < ActionController::API

  before_action :authenticate

  def encode_token(payload)
    # TODO: keep secrets safe
    JWT.encode(payload, "SuP3rS3cr37")
  end
  
  def auth_header
    request.headers['Authorization']
  end
  
  def decoded_token
    if auth_header
      # auth_header returns: "Bearer <<token>>"
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, "SuP3rS3cr37", true, algorithm: 'HS256')
      rescue JWT::DecodeError
        # TODO: is there something else that can go here for client?
        nil
      end
    end
  end
  
  def current_user
    if decoded_token
      # eg: [{ "user_id"=>"2" }, { "alg"=>"HS256" }]
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    else

    end
  end

  def logged_on?
    !!current_user
  end


  def authenticate
    render json: {message: 'Please log in'}, status: :unauthorized unless logged_on?
  end
  
end
