class GoodreadsController < ApplicationController
  before_action :set_goodread, only: [:show, :update, :destroy]

  # GET /goodreads
  def index
    @goodreads = Goodread.all

    render json: @goodreads
  end

  # GET /goodreads/1
  def show
    render json: @goodread
  end

  # POST /goodreads
  def create
    @goodread = Goodread.new(goodread_params)

    if @goodread.save
      render json: @goodread, status: :created, location: @goodread
    else
      render json: @goodread.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /goodreads/1
  def update
    if @goodread.update(goodread_params)
      render json: @goodread
    else
      render json: @goodread.errors, status: :unprocessable_entity
    end
  end

  # DELETE /goodreads/1
  def destroy
    @goodread.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_goodread
      @goodread = Goodread.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def goodread_params
      params.require(:goodread).permit(:title, :img_url, :publication_date, :author_name, :category_name)
    end
end
