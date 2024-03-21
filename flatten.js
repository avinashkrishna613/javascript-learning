let obj = {
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}

let finalObj = {};
let subObj = {};

function recFlatten(key, value) {
	if (typeof value == "object") {
  	for (var ikey of Object.keys(value)) {
    	recFlatten(key+"."+ikey, value[ikey]);
    }
  } else {
  	subObj[key] = value;
  }
}


function flattenObj(obj) {
	for (var key of Object.keys(obj)) {
  	var type = typeof obj[key];
  	if (type == "string" || type == "number") {
    	finalObj[key] = obj[key];
    } else {
    	subObj = {};
    	recFlatten(key, obj[key]);
      finalObj = {...finalObj, ...subObj};
    }
  }
}

flattenObj(obj);
console.log(finalObj);