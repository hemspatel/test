
const EventEmitter = require("events");

var url = "http://patelitsolutions.com/login"


class Logger extends EventEmitter {
    
    log(message){
        console.log(message)
        
        // Rsise an event
        this.emit("messageLogged", {id: 1, url: "http://"});

    }
    
    
}

module.exports = Logger;

//console.log(__filename)
//console.log(__dirname)

//function log(message){
//    console.log(message)
//}
//
//
//module.exports.log = log;