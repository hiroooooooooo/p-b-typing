class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable
        #  [memo]:validatableを削除

  # [memo]ベース部分を残す
  # with_options presence: true do
  #   validates :name, uniqueness: true
  #   validates :password, format: { with: /\A\d+\z/ }
  # end

  with_options presence: { message: 'を入力してください' } do
    validates :name, uniqueness: { message: 'がすでに存在しています。別の名前を入力してください' }
    # [memo]パスワードに対して手動でバリデーションを追加してあげる
    # [memo]数字のみの正規表現
    validates :password, format: { with: /\A\d+\z/, message: 'は数字で入力してください' }
  end

  # 確認用パスワードのバリデーション
  validates :password, confirmation: true
  validates :password_confirmation, presence: true

  has_one :game, dependent: :destroy
  # , class_name: 'Game'
end