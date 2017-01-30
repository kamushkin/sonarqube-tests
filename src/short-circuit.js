

function notBoolean(promise, doSomething){

	// jQuery
	//   https://sonarqube.com/issues#issues=AVl2B2tcoyrXF8JkMTQy

	var then = promise &&
		( typeof promise === "object" || typeof promise === "function" ) &&
		promise.then;

	if (then) {
		then.call(doSomething);
	}
}


function notBoolean2(returned){

	var then = returned &&
		( typeof returned === "object" ||
			typeof returned === "function" ) &&
		returned.then;

	then.call(returned);
}


function notBoolean3(returned){

	var then = returned && typeof returned === "object" && returned.then;

	then.call(returned);
}


function notBoolean4(returned){

	var then = returned && returned.then;

	then.call(returned);
}


function notBoolean5(promise){

	var then = promise && promise.then;

	then.call(promise);
}
