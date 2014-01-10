class User < ActiveRecord::Base
  attr_accessible :password, :username

  validates :username, :token, :presence = true
  validates :password, :presence => true, :length => {:minimum => 6}

  before_validation :generate_session_token

  def password=(secret)
    self.password_digest = BCrypt::Password.create(secret)
  end

  def is_password(secret)
    BCrypt::Password.new(self.password_digest).is_password(secret)
  end

  def reset_session_token
    generate_session_token
    self.save!
    token
  end

  def generate_session_token
    self.token = SecureRandom.urlsafe_base64(32)
  end

end
