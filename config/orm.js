//Connect connection.js
var connection = require("../config/connection.js");

//Helper function for SQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i=0; i< num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
	var arr = [];

	//loop through the keys and push the key/value as a string int arr
	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			//if string has spaces, add quotes
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}

			arr.push(key + "=" + value);
		}
	}

	//translate array of strings to a single comma-separated string
	return arr.toString();
}

//Object for SQL statement functions
var orm = {
	all: 
}




selectAll()


insertOne()


updateOne()



//Export the orm for the model (burger.js) to use
module.exports = orm;