interface student_id {
    firstname:string,
    lastname:string,
    rollnumber:number,
    subject:string
}

const data: student_id = {
    firstname: "fatima",
    lastname:"asad",
    rollnumber:12345,
    subject:"computer"
}

console.log(data)

interface item {
    name:string,
    price:number
}

const fruits: item = {
    name: "mango",
    price: 100
}

console.log(fruits)