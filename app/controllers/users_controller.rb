class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      redirect_to feeds_index
    else
      render :json => @user.errors.full_messages, :unprocessable_entity = 422
    end
  end

end
