class Api::V1::PostsController < ActionController::Base
skip_before_action :verify_authenticity_token
  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @posts = Post.find(params[:id])
    render json: @posts
  end

  def create
    @post = Post.create(post_params)
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
