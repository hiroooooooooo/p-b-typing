class UsersController < ApplicationController
  before_action :authenticate_user!, only: :show

  def show
    @user = User.find(params[:id])
    @game = Game.find(@user.game.id)
    if @user != current_user
      redirect_to root_path
    end 
    @level_count = Game.select("level").count
    @level_order = Game.select("level").order("level DESC")
    # @level_last = Game.select("level").order("level DESC").last
    # binding.pry

    i = 0
    @my_rank = 1
    while i < @level_count do
      if @game.level == @level_order[i].level
        @my_rank += i
        break
      else
        i += 1
      end
    end
  end

end
