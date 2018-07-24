const superagent = require("superagent")
const request = require("request")
const rn = require('random-number');
module.exports.run = async (client, message) => {
    const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

    console.log('chargement !')

    if(err || res.statusCode!== 200)return;

    console.log('chargé avec succés')
  //base de données
    let userData = JSON.parse(body);
    var Sender = message.author;
    if(!userData[Sender.id]){
        message.reply("Tu n'es pas enregistré fais !register pour mettre à jour la base.")
        return;
    }else{
    if(userData[Sender.id].currentMana === 0){
        message.channel.send("Tu n'as plus de mana. <:chat:469113692492005376>")
    }else{
    var crit = userData[Sender.id].mineall*2;
    var nombre = Math.floor(Math.random()*crit);
    userData[Sender.id].coins = userData[Sender.id].coins +++ nombre;
    userData[Sender.id].currentMana --- userData[Sender.id].currentMana;
    message.channel.send(`Tu as gagné ${nombre} <a:coins:467999444567195651> [Mana utilisé: ${userData[Sender.id].currentMana}]`)
    request({ url: url, method: 'PUT', json: userData})
    }
}
})
}

module.exports.help = {
    name:"mineall"
}
