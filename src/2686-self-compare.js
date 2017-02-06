

function selfCompare(param){

	if (param != param){
		// NaN
	}

	if (param !== param){
		// NaN
	}

	if (param instanceof param){
		// Object (constructor)
		// we cannot do param === Object because the object could be created in another frame
	}

}
