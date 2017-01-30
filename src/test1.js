

function isArray(obj){
	return Array.isArray(obj);
}


function testIfBranch(param){

	var results;

	if (typeof param == 'string'){
		results = [param];
	}

	if (!isArray(results)){
		results = [];
	}

	// check
	return results.length;
}