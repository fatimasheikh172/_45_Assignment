//lowercase
var personName = "Fatima";
console.log("lowercase", personName.toLowerCase());
//uppercase
console.log("uppercase", personName.toUpperCase());
//titlecase
console.log("titlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
