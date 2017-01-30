

function skipIfBranch(param){

	var result;

	if (typeof param == 'string'){
		result = [param];
	}

	if (!Array.isArray(result)){
		result = [];
	}

	// result is an array here, cannot be null/undefined
	return result.length;
}



function customAssert(param){

	function assertNotNull(value){
		if (value === null){
			throw new Error('value is null');
		}
	}


	var result;

	if (typeof param == 'string'){
		result = [param];
	}

	assertNotNull(result);

	// result cannot be null/undefined here
	return result.length;
}
