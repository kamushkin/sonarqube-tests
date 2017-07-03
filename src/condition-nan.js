

function compare1(a, b){
	return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


function compare2(a, b){

	if (a < b){
		return -1;
	}
	else if (a > b){
		return 1;
	}
	else if (a >= b){
		return 0;
	}
	else {
		return NaN;
	}
}


