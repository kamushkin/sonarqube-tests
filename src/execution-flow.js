

function skipIfBranch(param){

	// jQuery
	//   https://sonarqube.com/issues#issues=AVl2B2tcoyrXF8JkMTQy

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

	// react
	//   https://sonarqube.com/issues#issues=AVjdI39UbWj_GMDPVsA8
	//   https://sonarqube.com/issues#issues=AVTMqSgftu4QdCAX4XJm

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



function testWhile(tag, tmp){

	// https://sonarqube.com/issues#issues=AVnJW7_5Ybr9ugKerrQd

	var elem = 0;

	if (tag === "table"){
		elem = tmp;
	}

	var j = elem && elem.childNodes.length;

	while ( j-- ) {
		elem.removeChild(elem.firstChild);
	}
}



function doubleCondition(param, doSomething){

	// https://sonarqube.com/issues#issues=AVn7ordhaRqHwG08CTVt

	var a;

	if (param.value){
		a = [1];
	}

	doSomething(param);

	if(param.value){
		a.push(2);
	}

	return a;
}



function doubleCondition2(){

	// https://sonarqube.com/issues#issues=AVoYGn6rPy26VwNFV1fv

	var condition = true;

	function doSomething(){
		// ...
	}

	function inner(){

		var a;

		if (condition){
			a = [1];
		}

		doSomething();

		if (condition){
			a.push(2);
		}
	}
}


function unknownProperty(obj, doSomething){

	// https://sonarqube.com/issues#issues=AVWCHxapSARHJEIG7AEb

	if (obj === null){
		doSomething();
	}

	if (this.child === obj){
		this.child = obj.child;
	}
}


function unknownValue(obj, value, doSomething){

	if (obj === null){
		doSomething();
	}

	// knowing that value cannot be null
	if (obj === value){
		obj.value = value;
	}
}


