var http = require("http");

function readStreamAsString(stream, callback) {
    var content = "";
    stream.on("data", function(chunk) {
        content += chunk;
    });
    stream.on("end", function() {
        callback(null, content);
    });
    stream.on("error", function(error) {
        callback(error);
    });
}



function typeReq(type) {
    http.request({
        hostname: "eloquentjavascript.net",
        path: "/author",
        headers: {
            Accept: type
        }
    }, function(response) {

        readStreamAsString(response, function(error, content) {
            if (error) throw error;
            console.log("Type " + type + ": " + content);
        });
    }).end();

}



typeReq("application/json");
typeReq("text/html");
typeReq("text/plain");