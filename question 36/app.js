var sizeofshirt = ["small", "medium", "large"];
var shirt1 = "This shirt is for casual wearing";
var shirt2 = "This shirt is for formal wearing";
var shirt3 = "This shirt is for party wearing";
function make_tshirt() {
    var simplefunction = "This is a ".concat(sizeofshirt[2], " shirt, and ").concat(shirt3);
    console.log(simplefunction);
    return simplefunction;
}
var responce = make_tshirt();
console.log(responce);
