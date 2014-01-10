class SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      login!(user)
    else
      redirect_to :root
    end
  end

  def destroy
    @user = user.find_by_token(session[:token])
    logout!(@user)
  end
end
