let user_name = ["admin","ali","adnan","amir"];
user_name = []
if(user_name.length === 0){console.log(" We need to find some users!")}
else{
    user_name.forEach(
        oneUser=>
        {
    if(oneUser==="admin"){console.log(`Hello ${oneUser},would you like to check status`)}
else{console.log(`Hello ${oneUser},thankyou for logging in again`)}}
)}
