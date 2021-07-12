class GamesController < ApplicationController

  def index
  end

  def new
  @genre = params[:genre]
  end

end
