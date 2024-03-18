const https = require("http");

const myServer = https.createServer((req,res) => {
    console.log("New Req rec");
    res.end("Hello from server");
});

myServer.listen(8000, () => console.log("Server Started"));