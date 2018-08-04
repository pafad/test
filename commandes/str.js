const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message, args) => {
if(message.author.id !== "306119836503900161"){
message.reply("tu n'est pas mon développeur")
}else{
    const trUrl = "https://api.myjson.com/bins/1buwmq";
    request(trUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let Tr = JSON.parse(body);
    if(args[1] === "s"){
    Tr.time = Date.now() + args[0]*1000;
    request({ url: trUrl, method: 'PUT', json: Tr})
    message.channel.send(`trésor dans ${args[0]} secondes`)
    }
    
    if(args[1] === "min"){
    
    Tr.time = Date.now() + args[0]*60000;
    request({ url: trUrl, method: 'PUT', json: Tr})
    message.channel.send(`Trésor dans ${args[0]} minutes`)
    }
    })
    }
    }
    module.exports.help = {
    name:"str"
    }
