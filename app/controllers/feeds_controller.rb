class FeedsController < ApplicationController
  def index
    @feed = Feed.all.first
    # if (Time.now - @feed.updated_at >= 120)
#       @feed.updated_at = Time.now
#       @feed.save!
#       @feed.reload
#     end

    # render :json => Feed.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Feed.all.to_json(:include => :entries) }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end


end
