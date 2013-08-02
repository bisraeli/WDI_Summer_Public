AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController
  resources :tasks, only: [:create, :destroy, :index] do
    put :complete, on: :member # /tasks/:id/complete
  end

end
