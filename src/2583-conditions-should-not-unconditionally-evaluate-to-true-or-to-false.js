

function conditionalReturn(param){

	// https://sonarqube.com/issues#issues=AVn7orbraRqHwG08CTNc
	// https://sonarqube.com/issues#issues=AVn7orcYaRqHwG08CTPt
	// https://sonarqube.com/issues#issues=AVn7ordraRqHwG08CTWQ

	/*

		if (param) {
			  return [param];
		}
		else {
			  return null;
		}


	*/

	return (param && [param]) || null;
}

