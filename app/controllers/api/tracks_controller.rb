# require 'ApplicationController'

class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render :index
    end

    def show 
        @track = Track.find_by(id: params[:id])
    end

    def create 
        @track = Track.new(track_params)
        # for testing, pass artist_id back to server 
        # from session.id (currentUser) on frontend
        # @track.artist_id = 12 

        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def update
        @track = Track.find(params[:id])
        # debugger
        if @track.update(track_params)
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        @track = Track.find_by(id: params[:id])

        if @track
            @track.destroy
            render json: ['Track successfully deleted'], status: 200
        else
            render json: ["Could not find track"], status: 422
        end
    end



    private

    def track_params 
        params.require(:track).permit(:title, :genre, :description, :caption, :id)
    end
end
