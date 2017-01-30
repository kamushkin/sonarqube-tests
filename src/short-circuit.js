

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



function Identity( v ) {
	return v;
}

function Thrower( ex ) {
	throw ex;
}


function abc(deferred, handler, special, that, args, maxDepth, resolve, jQuery){

	var returned, then;

	returned = handler.apply( that, args );

	if ( returned === deferred.promise() ) {
		throw new TypeError( "Thenable self-resolution" );
	}

	then = returned &&
		( typeof returned === "object" ||
			typeof returned === "function" ) &&
		returned.then;

	// Handle a returned thenable
	if ( jQuery.isFunction( then ) ) {

		// Special processors (notify) just wait for resolution
		if ( special ) {
			then.call(
				returned,
				resolve( maxDepth, deferred, Identity, special ),
				resolve( maxDepth, deferred, Thrower, special )
			);
		}

	}
}


function abc2(deferred, handler, special, that, args, maxDepth, resolve){

	var returned, then;

	returned = handler.apply( that, args );

	then = returned &&
		( typeof returned === "object" ||
			typeof returned === "function" ) &&
		returned.then;

	// Special processors (notify) just wait for resolution
	if ( special ) {
		then.call(
			returned,
			resolve( maxDepth, deferred, Identity, special ),
			resolve( maxDepth, deferred, Thrower, special )
		);
	}

}


function abc3(returned, special){

	var then;

	then = returned &&
		( typeof returned === "object" ||
			typeof returned === "function" ) &&
		returned.then;

	// Special processors (notify) just wait for resolution
	if ( special ) {
		then.call(returned);
	}

}


function abc4(returned){

	var then = returned &&
		( typeof returned === "object" ||
			typeof returned === "function" ) &&
		returned.then;

	then.call(returned);
}
