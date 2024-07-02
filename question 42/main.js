var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return console.log(__makeTemplateObject(["The Great ", ""], ["The Great ", ""]), name); });
}
var magicians_names = ['HarryHarry Houdini', "David Blaine", "Doug Henning"];
var great_magicians = make_great(magicians_names);
