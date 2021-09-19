// const express = require("express");
// const app = express();
const path = require("path");
// const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname , "..");
// console.log(staticPath);

function linkPath(tempPath){
    return staticPath;
}

// app.use(express.static(staticPath));

// app.get("/",(req ,res) =>{
//     res.send("Hlw form the other side.");
// })

// app.listen(port , () =>{
//     console.log("Connection Successful.");
// })