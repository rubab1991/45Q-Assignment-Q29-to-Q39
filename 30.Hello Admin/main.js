var user_name = ["admin", "ali", "junaid", "rana", "hasan"];
user_name.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
var user_name1 = ["admin", "ali", "junaid", "rana", "hasan"];
user_name1.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("/n hello ".concat(oneUser, ",would you like to see the status?"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thankyou for logging in"));
    }
});
