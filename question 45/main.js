function create_car(manufacture, model, color, price) {
    var car = {
        manufacture: manufacture,
        model: model,
        color: color,
        price: price
    };
    return car;
}
var my_car = create_car("toyota", "corolla", "white", 5969000);
console.log(my_car);
