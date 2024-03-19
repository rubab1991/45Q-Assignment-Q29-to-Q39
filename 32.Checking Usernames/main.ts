//array of current users 
let current_users =["Ali","Shan","Hasan","aliya","rida"];

//array of new users
let new_users = ["Tom","Ali","Nom","Rida","husnain"];

//loop through new users to check for usename availability
new_users.forEach(one_new_users =>{
    let our_condition = current_users.some
    (one_current_users=> one_current_users.toLowerCase() === one_new_users.toLowerCase())
//using if else stament to print different messages
    if (our_condition){console.log(`this username ${one_new_users} is already used`)}
    else{console.log(`this username ${one_new_users} is available`)}} )

    
