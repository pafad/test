const moment =require("moment")
const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message) => {
    const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

    console.log('chargement !')

    if(err || res.statusCode!== 200)return

    console.log('chargé avec succés')
  //base de données
    let userData = JSON.parse(body);
    var Sender = message.author;
    if(!userData[Sender.id]){
        message.reply("Tu n'es pas enregistré fais !register pour mettre à jour la base.")
        return;
    }else{
    let nombre = Math.floor(Math.random()*500)
    var now = new Date().getTime();
    var distance = userData[Sender.id].LastDaily - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if((userData[Sender.id].LastDaily > Date.now()) && (userData[Sender.id].LastDaily !== 0)){
        message.channel.send(`Ton daily n'est pas dispo, reviens dans ${hours} heures ${minutes} minutes et ${seconds} secondes.`)
        return;
    }else{
    userData[Sender.id].coins += nombre;
    userData[Sender.id].LastDaily = Date.now() + 86400000;
    request({ url: url, method: 'PUT', json: userData})
    message.channel.send(`${message.author} tu as gagné ${nombre} <a:coins:467999444567195651> , à demain ;)`)
}
}
})
}

module.exports.help = {
    name:"daily"
}
