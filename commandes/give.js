
const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args) => {
const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {
    
    console.log('chargement !')
    
    if(err || res.statusCode!== 200)return
    
    console.log('chargé avec succés')
    
    //base de données
    let userData = JSON.parse(body);
    var Sender = message.author;
    var mention = message.mentions.users.first();
    if(!userData[Sender.id]){
        message.reply("Tu n'es pas enregistré fais !register pour mettre à jour la base.")
        return;
    }else{
        if(!userData[mention.id].username){
            message.reply("mentionne un joueur qui joue <:chat:469113692492005376>")
            return;
        }else{
          if(mention.id == Sender.id){
              message.reply("qu'est-ce que tu essaie de faire là, dis moi pas tu essaie de te give des ressources à toi-même <:chat:469113692492005376>")
          }else{
              if(!args[1] === "coins" || !args[1] === "argent"){
                  message.reply("spécifie la ressource")
              }else{
              if(args[2] < 1){
                    message.reply("spécifie un nombre de ressouces");
              }else{
                if (userData[Sender.id].coins > args[2]){
                    message.reply("Tu n'as pas assez de <a:coins:467999444567195651>")
             }else{
                userData[Sender.id].coins -= args[2];
                userData[mention.id].coins += args[2];
                request({ url: url, method: 'PUT', json: userData})
                message.reply(`Tu as give ${args[2]} <a:coins:467999444567195651> à ${mention.tag}`)
                client.users.get(mention.id).send(`Tu as reçu ${args[2]} <a:coins:467999444567195651> de la part de ${Sender.tag}`)

const logsurl = "https://api.myjson.com/bins/wjtwa";
request(logsurl, (err, res, body) => {

console.log('chargement !')

if(err || res.statusCode!== 200)return

console.log('chargé avec succés')
  let channel = JSON.parse(body);
for(var i in channel){
    if(i.endsWith(client.guilds.findAll("id", channel))){
        client.channels.get(channel[i].logs).send({embed:{
            color: Math.floor(Math.random() * 16777214) + 1,
            title:`Logs: ${new Date().toString()}`,
            description:`[Give] ${userData[Sender.id].username} -> ${mention.username} Ressources envoyé: ${args[2]} <a:coins:467999444567195651> depuis le serveur ${message.guild.name}`
        }})
} 
} 
})
                }
              }
            }
          }  
        }    
    }
})
}
module.exports.help = {
    name:"give"
}
