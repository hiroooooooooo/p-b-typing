class UsersController < ApplicationController
  before_action :authenticate_user!, only: :show

  def show
    @user = User.find(params[:id])
    @game = Game.find(@user.game.id)
    redirect_to root_path if @user != current_user
    @level_count = Game.select('level').count
    @level_order = Game.select('level').order('level DESC')

    i = 0
    @my_rank = 1
    while i < @level_count
      if @game.level == @level_order[i].level
        @my_rank += i
        break
      else
        i += 1
      end
    end
  end
end
