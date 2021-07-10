class GamesController < ApplicationController

  def index
    # @path = request.fullpath
    # binding.pry
  end

  def new
  @genre = params[:genre]
  end

end
