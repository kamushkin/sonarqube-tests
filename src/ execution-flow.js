

function skipIfBranch(param){

	function isArray(value){
		return Array.isArray(value)
	}


	var result;

	if (typeof param == 'string'){
		result = [param];
	}

	if (!isArray(result)){
		result = [];
	}

	// result is an array here, cannot be null/undefined
	return result.length;
}



function customAssert(param){

	function assertNotNull(value){
		if (value === null || value === undefined){
			throw new Error('value is null/undefined');
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
