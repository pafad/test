const moment =require("moment")
const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message) => {
    
    const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

    console.log('chargement !')

    if(err || res.statusCode!== 200)return;

    console.log('chargé avec succés')
  //base de données
    let userData = JSON.parse(body);
    var Sender = message.author;
    var mention = message.mentions.users.first();
    if(!userData[Sender.id]){
        message.reply("Tu n'es pas enregistré fais !register pour mettre à jour la base.")
        return;
    }else{
        var now = new Date().getTime();
        var distance = userData[Sender.id].LastRep - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if((userData[Sender.id].LastRep > Date.now()) && (userData[Sender.id].LastRep !== 0)){
            message.channel.send(`Ton rep n'est pas dispo, reviens dans ${hours} heures ${minutes} minutes et ${seconds} secondes.`)
            return;
        }else{
            if(!mention){
                message.channel.send(":x: mentionne un utilisateur.");
                return;
            }else{
                if(mention.id == message.author.id){
                    message.channel.send("Je sais que tu t'aime bien mais n'en fais pas trop. <:chat:469113692492005376>")
                    return; 
                }else{
                    if(mention.bot){
                        message.channel.send("Tu ne peux pas donner un rep à un bot. <:chat:469113692492005376>")
                        return;  
                    }else{
                        userData[mention.id].rep = userData[mention.id].rep +++ 1;
                        userData[Sender.id].LastRep = Date.now() + 86400000;
                        request({ url: url, method: 'PUT', json: userData})
                        message.channel.send(`${message.author} tu as donné un point de réputation à **${mention.username}**`)
                    }
                }
            }

}
}
})
}

module.exports.help = {
    name:"rep"
}
