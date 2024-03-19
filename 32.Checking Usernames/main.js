//array of current users 
var current_users = ["Ali", "Shan", "Hasan", "aliya", "rida"];
//array of new users
var new_users = ["Tom", "Ali", "Nom", "Rida", "husnain"];
//loop through new users to check for usename availability
new_users.forEach(function (one_new_users) {
    var our_condition = current_users.some(function (one_current_users) { return one_current_users.toLowerCase() === one_new_users.toLowerCase(); });
    //using if else stament to print different messages
    if (our_condition) {
        console.log("this username ".concat(one_new_users, " is already used"));
    }
    else {
        console.log("this username ".concat(one_new_users, " is available"));
    }
});
