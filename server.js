const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('BOT RADI!')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server je spreman!!")});
}
module.exports = keepAlive;