class WelcomeController < ApplicationController

    def index
    end

    def update
      respond_to
      @tasks = Task.all
    end


# passes tasks as javascript notation object to the client

    def json
      render :json => Task.all.to_json
    end
end