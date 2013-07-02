city_populations = {:san_francisco => 100000, :nyc=> 900000, :boston => 600000}

def annotate_population(city_symbol, city_populations_hash)
  population_value = city_populations_hash[city_symbol]
  return "#{[city_symbol]} (Population #{population_value}"
end

puts annotate_population(:san_francisco, city_populations)


#def annotate_population(city_symbol)
    population_value = city_populations[city_symbol]
 #   return "#{city_symbol}" (population_value)


 3:09 pm
 david on arrays

 capitalize won't work on array of strings, because it itself is not a string.

 i need to use an interator to go through these things.

 #once i have an array, let's say its made up of students and their names

 i can alter them via student.each {|student| p student.capitalize}   #don't forget 'p' for print

