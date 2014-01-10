class SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      user.login!
    else
      redirect_to :root
    end
  end

  def destroy
    @user
  end
end
