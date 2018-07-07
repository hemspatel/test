



const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = "3000";

fs.readFile('index.html',(err,html)=>{
   if(err){
       throw err;
   } 
   
   const server = http.createServer((req,res)=>{
   res.statusdCode = 200;
   res.setHeader("Content-type","text/html");
   res.write(html);
       res.end();
   })

server.listen(port,hostname,()=>{
   
        console.log("Server started "+port);
});
    
});






//
//const http = require("http");
//
//const server = http.createServer((req,res)=>{
//    
//    if(req.url==="/"){
//        res.write("Hello hems");
//        res.end();
//    }
//    if(req.url==="/hems"){
//        res.write(JSON.stringify([5,74,785,721,10]));
//        res.end();
//    }
//});
//
////server.on("connection",(socket)=>{
////    console.log("New connection found....")
////    
////});
//
//server.on("close",(socket)=>{
//    console.log("New connection close found....")
//    
//});
//
//server.listen(3000);
//console.log("Listening on port 3000");
//
//
//


//const EventEmitter = require("events");
// //       const event = new EventEmitter();
//        
//        const Logger = require("./logger")
//        const logger = new Logger();
//        
//        
//        
//        // Register event listner
//        logger.on("messageLogged", function(eObj) {
//            console.log("Listner ", eObj);
//        });
//
//        logger.on("messageLogged", (eObj) => {
//            console.log("Listner ", eObj);
//        });
//
//
//logger.log("Helo hems")
// Raise an event 
//event.emit("messageLogged", {id: 1, url: "http://"});

//Raise: Logging (data:message)

/* Hello World! program in Node.js */
//console.log("Hello World!");
//console.log(module);

//var logger = require("./logger");
//
//
//
//const os = require("os");
//
//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();
//
//
//console.log("Total Memory: "+ totalMemory);
//console.log("Total Memory: "+ freeMemory);
////console.log(logger);
//
//console.log(`Total: ${freeMemory}`)
//
//console.log('Totla : ${freeMemory}');
//console.log('Totla : ${totalMemory}');


//
//const fs = require("fs")
//
////const files = fs.readdirSync("./");
////
////console.log(files);
//
//
//fs.readdir("./",function(error, files){
//    console.log(files);
//});