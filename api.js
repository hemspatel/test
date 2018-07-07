var ApiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=00a5413fc6eece2c892527c321a523a5&language=en-US&page=1"
var http = require("http")



function getJson(urloption, callBack){
   http.request(urloption, function(res){
    var body = "";
    res.on("data",function (chunk){
       body += chunk 
    });
    
    res.on("end", function(){
        var movieinfo = JSON.parse(body);
       callBack(null, movieinfo);
    });
    res.on("error",callBack);
})
        .on("error",callBack)
        .end(); 
    
}

var urloption =     {
  host: "api.themoviedb.org",
  path:"/3/movie/popular?api_key=00a5413fc6eece2c892527c321a523a5&language=en-US&page=1",
  method: "GET"
};
//00a5413fc6eece2c892527c321a523a5

getJson(urloption, (err,result)=>{
   if(err){
       return console.log("Error "+err);
   }
    console.log(result)
});