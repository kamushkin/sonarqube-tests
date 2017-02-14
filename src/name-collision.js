

function undeclaredLoopVar(){

	var i, x = 0;

	function doSomething(param){

		// forgot to declare i
		for(i=0; i<10; i++){
			x += param;
		}
	}

	for(i=0; i<42; i++){
		doSomething(i);
	}

}