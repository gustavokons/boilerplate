class WelcomeController < ApplicationController
  def index
    @title = 'Family'
    @people = ['Caio', 'Gustavo', 'João']
  end
end
