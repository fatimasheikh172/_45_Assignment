var pet_animals = ["cat", "dog", "rabbit"];
console.log("\nAnimals Names");
for (var i = 0; i < pet_animals.length; i++) {
    console.log("\n".concat(pet_animals[i]));
}
;
console.log("\n statements \n");
for (var i = 0; i < pet_animals.length; i++) {
    console.log("\nA ".concat(pet_animals[i].toLowerCase(), " would make a great pet"));
}
;
console.log("\n Any of these animals would make a great pet!");
