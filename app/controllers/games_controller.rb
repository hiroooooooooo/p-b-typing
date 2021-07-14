class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def new
  @genre = params[:genre]
  # @genre = params
  # binding.pry
  # @genre = params[:genre, :id]
  end

  def create
    game = Game.create(point: params[:point])
    # game = Game.create(point: charNum)
    # game = Game.create(game_params)
    # game = Game.create(point: params[charNum])
    render json:{game: game}
    binding.pry
  end

  private

  def game_params
    params.require(:game).permit(:level, :point, :count).merge(user_id: current_user.id)
  end

end
