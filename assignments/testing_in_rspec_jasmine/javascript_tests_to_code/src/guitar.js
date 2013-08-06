if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var guitar = {
  test_guitar = Object.create(guitar);
  numberOfStrings = 6
  var breakString = function(numberOfStrings){
    numberOfStrings - 1
  }
  var playbasicRhythm = function(){
    console.log("jug jigga jug jigga jug")
  }
  var playhighstrings = function(){
    console.log("meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley MEEEEEEEEEEEEEEEE. \'And the dragon comes in the NIIIiiiiIIIiiiiIIIIIIIIiiiiiiiiiiiIIIIIIIIiiiIIGGHH\')
  }


};