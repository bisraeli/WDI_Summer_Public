class TasksController < ApplicationController
	# STEP 3: Create the following TasksController actions:
	respond_to :html, only: [:index]
	respond_to :json, only: [:index, :create]
	respond_to :js, only: [:complete, :destroy]

	def index
		respond_to do |format|
			format.json { render json: Task.all.to_json }
			format.html
		end
	end
	# index - respond to html & json

	def create
		render json: Task.create!(params[:task]).to_json
	end
	# create - respond to json

	def complete
		@task = Task.find(params[:id])
		@task.complete = true
		@task.save!
	end
	# complete - respond to js

	def destroy
		Task.find(params[:id]).destroy
	end
	# destroy - respond to js

	# STEP 8: Make the index action respond to json requests with json containing the array from `Task.all`

	# STEP 21: In the create action, instantiate a new `Task` object and save filling in the `name` parameter
	# STEP 22: In the create action, set up `respond_to` to a json request with json containing the saved task object

	# STEP 25: Find the task by id and set it's `completed` property to `true` in the `TasksController#complete` action
	# STEP 26: Make the `TasksController#complete` `respond_to` respond to a javascript request
end
