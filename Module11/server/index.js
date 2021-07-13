const WebSocket = require("ws");
const wss = new WebSocket.Server({ port:8082 });

wss.on("connection",ws => {
    console.log("new client connected");

    ws.on("message",(data)=>{
        console.log(`client has send this data : ${data}`);
        ws.send("Okay Client I got Your Msg!");
    })

    ws.on("close", () =>{
        console.log("client has Disconected");
    });
});