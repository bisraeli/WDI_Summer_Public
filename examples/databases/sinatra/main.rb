require 'sinatra'
# if development is optional
require 'sinatra/reloader' if development?
# gem is for postgres
require 'pg'
# for debugging
require 'pry'
# for colors in our terminal
require 'rainbow'

# helpers do
#   def open_db(sql)
#     PG.connect(:dbname => 'address_book', :host => 'localhost')
#   end

# def run_sql(sql)
#   PG.connect(:dbname => 'address_book', :host => 'localhost')
#   result = db.exec(sql)
#   db.close
#   result
# end

get '/' do
  # this prints to sinatra's server logs in terminal
  puts "This is the index".color(:red)
  erb :index
end

# shows all contacts
get '/contacts' do
  puts "we're connecting to the database".color(:blue)
  db = PG.connect(:dbname => 'address_book', :host => 'localhost')
  sql = "SELECT * FROM contacts"
  @contacts = db.exec("SELECT * FROM contacts")
  db.close
  puts "database is closed".color(:magenta)
  erb :contacts
end

post '/contacts' do
  first = params[:first]
  last = params[:last]
  age = params[:age]
  sql = "INSERT INTO CONTACTS (first, last, age) VALUES ('#{first}', '#{last}', #{age})"
  db = PG.connect(:dbname => 'address_book', :host => 'localhost')
  db.exec(sql)
  db.close
  redirect to '/contacts'
end

get '/contacts/:id/edit' do
  id = params[:id]
  db= PG.connect(:dbname => 'address_book', :host => 'localhost')
  sql = "SELECT * FROM contacts where id = '#{id}'"
  @contact = db.exec(sql).first
  erb :edit
end

# Make a new contact
get '/contacts/new' do
  erb :form
end

# show one specific contact
get '/contacts/:id' do     # can simply put in id as instance variable instead of all table items)
  id = params[:id]
  db = PG.connect(:dbname => 'address_book', :host => 'localhost')
  sql = "SELECT * FROM contacts WHERE id = '#{id}'"
  @contact = db.exec(sql).first
  db.close
  erb :contact
end

post 'contacts/:id' do
  id = params[:id]
  first = params[:first]
  last = params[:last]
  age = params[:age]
  db = PG.connect(:dbname => 'address_book', :host => 'localhost')
  sql = "update contacts set (first, last, age) = ('#{first}','#{last}','#{age}') Where id = #{id}"
  @contact = db.exec(sql).first
  redirect to '/contacts'
end








