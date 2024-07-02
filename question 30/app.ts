let  usernames = ['fatima', 'Ayesha', 'Masooma', 'zoha', 'Mehak','Hafsa']

usernames.forEach(oneuser =>{
    if (oneuser === "fatima"){
        console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneuser}, thank you for logging in again`)
    }
})
