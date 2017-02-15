

function returnedVariable(){

	var service = {

		init: function(){
			// init
		},

		doSomething: function(){

			service.init();

			// do smth
		}
	};

	return service;
}



function recursiveFunc(){

	var fn = function(p){
		return p ? fn(p-1) : 0;
	};

	return fn;
}