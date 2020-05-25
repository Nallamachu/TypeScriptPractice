function log(message) {
    console.log(message);
}
var message = "Welcome to TypeScript learning";
log(message);

function repeatLog() {
    for (var i = 0; i < 5; i++) {
        log(message + i);
    }

    log(message + i); //let will throw ReferenceError: i is not defined
}

repeatLog();