

function notBoolean(promise, doSomething){

	// jQuery
	//   https://sonarqube.com/issues#issues=AVl2B2tcoyrXF8JkMTQy

	var then = promise &&
		( typeof promise === "object" || typeof promise === "function" ) &&
		promise.then;

	if (then) {
		then.call(doSomething)
	}
}


function notBoolean2(value, doSomething){

	// jQuery
	//   https://sonarqube.com/issues#issues=AVl2B2tcoyrXF8JkMTQy

	var then = value && value.then;

	if (then) {
		then.call(doSomething)
	}
}

