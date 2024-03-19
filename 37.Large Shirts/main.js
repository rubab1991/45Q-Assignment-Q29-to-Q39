//making function when it asks to make default size and default message
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("the size of the shirt is ".concat(size, " and ").concat(message, " printed on it"));
}
;
//calling a function with by default values
make_shirt();
//creating a medium size shirt with default message
make_shirt("meduim");
//creating any size of shirt on with different message
make_shirt("small", "I love Allah");
