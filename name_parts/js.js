const string = "Peter Hans Larsen";

// console.log(string.lastIndexOf(" "));
string.substring(string.lastIndexOf(" "));
console.log("_" + string.substring(string.lastIndexOf(" ") + 1) + "_");

string.substring(string.indexOf(" "));
console.log("mellenavn", string.substring(string.indexOf(" ") + 1, string.lastIndexOf(" ")));

string.substring(0, string.indexOf(" "));
console.log(string.substring(0, string.indexOf(" ")));
