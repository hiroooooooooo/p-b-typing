class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    # ジャンル情報
    @genre = params[:genre]
  end

  def create
    if user_signed_in?
      @user = User.find(current_user.id)
      # userに紐づくgameモデルが無ければ
      unless @user.game.present? 
        game = Game.create(user_id: current_user.id)
      else
        game = Game.find(@user.game.id)
      end
    end
    render json:{game: game}
  end

  def update
    data = Game.find(params[:id])
    data.update(game_params)
    game = Game.find(params[:id])
    render json:{game: game}
  end

  private

  # 使わないかも
  def game_params
    params.permit(:level, :point, :count)
  end

end
