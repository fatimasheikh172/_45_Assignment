let sizeofshirt: string[] = ["small", "medium", "large"];

let shirt1 ="This shirt is for casual wearing";
let shirt2 = "This shirt is for formal wearing";
let shirt3 = "This shirt is for party wearing";

function make_tshirt(){
    let simplefunction = `This is a ${sizeofshirt[2]} shirt, and ${shirt3}`
    console.log(simplefunction)
    return simplefunction
}

let responce = make_tshirt()
console.log(responce)
