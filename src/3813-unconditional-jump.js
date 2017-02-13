

function continueWithReturn(test){

	// https://sonarqube.com/issues#issues=AVl0vNg0oyrXF8JkMRJU

 	for (;;) {

		var x = ++this.count;

		if (!test(x))
			continue;

 		return x;
 	}
}

