

function notBoolean(promise, doSomething){

	// jQuery
	//   https://sonarqube.com/issues#issues=AVl2B2tcoyrXF8JkMTQy

	var then = promise && promise.then;

	if (then) {
		then.call(doSomething)
	}
}


