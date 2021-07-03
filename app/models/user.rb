class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable
        #  [memo]:validatableを削除

  # 正規表現は後ほど
  validates :name, presence: true, uniqueness: true
  # [memo]パスワードに対してバリデーションを追加してあげる
  validates :password, presence: true
end