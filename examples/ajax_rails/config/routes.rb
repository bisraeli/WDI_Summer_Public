AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController
  root to: "welcome#index"
  get "/ajaxtest" => "welcome#update"
  get "/getjson" => "welcome#json"   #this route is associated w the ajax request from our welcome.js file
  resources :tasks, only: [:create, :destroy, :index] do
    put :complete, on: :member # /tasks/:id/complete


  end

end
