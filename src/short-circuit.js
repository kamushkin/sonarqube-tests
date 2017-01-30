

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


function xyz( onFulfilled, onRejected, onProgress, jQuery ) {


	var maxDepth = 0;

	function resolve( depth, deferred, handler, special ) {
		return function() {
			var that = this,
				args = arguments,
				mightThrow = function() {
					var returned, then;

					// Support: Promises/A+ section 2.3.3.3.3
					// https://promisesaplus.com/#point-59
					// Ignore double-resolution attempts
					if ( depth < maxDepth ) {
						return;
					}

					returned = handler.apply( that, args );

					// Support: Promises/A+ section 2.3.1
					// https://promisesaplus.com/#point-48
					if ( returned === deferred.promise() ) {
						throw new TypeError( "Thenable self-resolution" );
					}

					// Support: Promises/A+ sections 2.3.3.1, 3.5
					// https://promisesaplus.com/#point-54
					// https://promisesaplus.com/#point-75
					// Retrieve `then` only once
					then = returned &&

						// Support: Promises/A+ section 2.3.4
						// https://promisesaplus.com/#point-64
						// Only check objects and functions for thenability
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

						// Normal processors (resolve) also hook into progress
						} else {

							// ...and disregard older resolution values
							maxDepth++;
							then.call(
								returned,
								resolve( maxDepth, deferred, Identity, special ),
								resolve( maxDepth, deferred, Thrower, special ),
								resolve( maxDepth, deferred, Identity,
									deferred.notifyWith )
							);
						}

					// Handle all other returned values
					} else {

						// Only substitute handlers pass on context
						// and multiple values (non-spec behavior)
						if ( handler !== Identity ) {
							that = undefined;
							args = [ returned ];
						}

						// Process the value(s)
						// Default process is resolve
						( special || deferred.resolveWith )( that, args );
					}
				},

				// Only normal processors (resolve) catch and reject exceptions
				process = special ?
					mightThrow :
					function() {
						try {
							mightThrow();
						} catch ( e ) {

							if ( jQuery.Deferred.exceptionHook ) {
								jQuery.Deferred.exceptionHook( e,
									process.stackTrace );
							}

							// Support: Promises/A+ section 2.3.3.3.4.1
							// https://promisesaplus.com/#point-61
							// Ignore post-resolution exceptions
							if ( depth + 1 >= maxDepth ) {

								// Only substitute handlers pass on context
								// and multiple values (non-spec behavior)
								if ( handler !== Thrower ) {
									that = undefined;
									args = [ e ];
								}

								deferred.rejectWith( that, args );
							}
						}
					};

			// Support: Promises/A+ section 2.3.3.3.1
			// https://promisesaplus.com/#point-57
			// Re-resolve promises immediately to dodge false rejection from
			// subsequent errors
			if ( depth ) {
				process();
			} else {

				// Call an optional hook to record the stack, in case of exception
				// since it's otherwise lost when execution goes async
				if ( jQuery.Deferred.getStackHook ) {
					process.stackTrace = jQuery.Deferred.getStackHook();
				}
				window.setTimeout( process );
			}
		};
	}

	return jQuery.Deferred( function( newDefer ) {
		// removed
	} ).promise();
}


function abc(depth, deferred, handler, special, that, args, maxDepth, resolve, jQuery){

	var returned, then;

	// Support: Promises/A+ section 2.3.3.3.3
	// https://promisesaplus.com/#point-59
	// Ignore double-resolution attempts
	if ( depth < maxDepth ) {
		return;
	}

	returned = handler.apply( that, args );

	// Support: Promises/A+ section 2.3.1
	// https://promisesaplus.com/#point-48
	if ( returned === deferred.promise() ) {
		throw new TypeError( "Thenable self-resolution" );
	}

	// Support: Promises/A+ sections 2.3.3.1, 3.5
	// https://promisesaplus.com/#point-54
	// https://promisesaplus.com/#point-75
	// Retrieve `then` only once
	then = returned &&

		// Support: Promises/A+ section 2.3.4
		// https://promisesaplus.com/#point-64
		// Only check objects and functions for thenability
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

		// Normal processors (resolve) also hook into progress
		} else {

			// ...and disregard older resolution values
			maxDepth++;
			then.call(
				returned,
				resolve( maxDepth, deferred, Identity, special ),
				resolve( maxDepth, deferred, Thrower, special ),
				resolve( maxDepth, deferred, Identity,
					deferred.notifyWith )
			);
		}

	// Handle all other returned values
	} else {

		// Only substitute handlers pass on context
		// and multiple values (non-spec behavior)
		if ( handler !== Identity ) {
			that = undefined;
			args = [ returned ];
		}

		// Process the value(s)
		// Default process is resolve
		( special || deferred.resolveWith )( that, args );
	}
}
