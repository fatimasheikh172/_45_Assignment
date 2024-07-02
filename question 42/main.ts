function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

function make_great(magicians: string[]){
    return magicians.map(name => console.log `The Great ${name}`)}

let magicians_names = ['HarryHarry Houdini',"David Blaine","Doug Henning"]

 let great_magicians = make_great(magicians_names)




