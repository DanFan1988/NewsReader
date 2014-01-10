class User < ActiveRecord::Base
  attr_accessible :password, :username

  validates :username, :token, :presence = true
  validates :password, :presence => true, :length => {:minimum => 6}

  def password=(secret)

  end

  def is_password(secret)

  end

  def
  end
end
