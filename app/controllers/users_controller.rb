class UsersController < ApplicationController
  before_action :authenticate_user!, only: :show

  def show
    @user = User.find(params[:id])
    @game = Game.find(@user.game.id)
    if @user != current_user
      redirect_to root_path
    end 
  end

end
