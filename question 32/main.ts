let current_users:string[] = ["ayesha","masooma","mehak","sara","hafsa"];
let new_users:string[] = ["moazama"];

new_users.forEach((new_users) =>{
    if(
        current_users.some(
            (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
        )
    ){
        console.log(`${new_users},we will need to enter new user name`)
    }

    else{
        console.log(`${new_users} is available`)
    }
}

);