const superagent = require("superagent") 
const request = require("request") 

module.exports.run = async (client, message, args) => {

const banUrl = "https://api.myjson.com/bins/188vrw";
    request(banUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let ban = JSON.parse(body);  
  
if(message.author.id == "377925283098918912" || message.author.id == "287982988438929418"){
if(!message.mentions.users.first() || ! client.users.find("id",args[0]")){
	message.channel.send("utilisateur introuvable")  
    return;
   }else{
      message. channel. send ("indisponible") 
  return
      } 
  }else{
   message. channel. send("tu n'es pas mon développeur") 
  return
  } 
}) 
}
module.exports.help = {
name: "gameban" 
} 
