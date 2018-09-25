const superagent = require("superagent") 
const request = require("request") 

module.exports.run = async (client, message, args) => {

const banUrl = "https://api.myjson.com/bins/188vrw";
var user = client.users.find("id",args[0]);
    request(banUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let ban = JSON.parse(body);  
  
if(message.author.id == "377925283098918912" || message.author.id == "287982988438929418"){
if(!user){
	message.channel.send("utilisateur introuvable")  
    return;
   }else{
      if(!ban[user.id]) ban[user.id] = {} 
      if(!ban[user.id].raison) ban[user.id].raison = message.content.substr(30)
      request({ url: banUrl, method: 'PUT', json: ban})
      message. channel. send (`${user.tag} a été ban du jeu pour: ${message.content.substr(30)}`) 
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
