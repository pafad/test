const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message) => {
if(!message.author.id === ""){

}else{
    const trUrl = "https://api.myjson.com/bins/1buwmq";
    request(trUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let Tr = JSON.parse(body);
    if(args[1] === "s"){
    Tr.time = Date.now() +++ args[0]*1000;
    
    message.channel.send(`trésor dans ${args[0]} secondes`)
    }
    
    if(args[1] === "min"){
    
    Tr.time = Date.now() +++ args[0]*60000;
    
    message.channel.send(`Trésor dans ${args[0]} minutes`)
    }
    })
    }
    }
    module.exports.help = {
    name:"str"
    }
