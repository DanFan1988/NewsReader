module ApplicationHelper

  def current_user
    current_user = current_user || User.find_by_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:token] = user.reset_session_token
  end

  def logout(user)
    session[:token] = nil
    user.reset_session_token
    redirect_to :root
  end

end
