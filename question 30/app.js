var usernames = ['fatima', 'Ayesha', 'Masooma', 'zoha', 'Mehak', 'Hafsa'];
usernames.forEach(function (oneuser) {
    if (oneuser === "fatima") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
