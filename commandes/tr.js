const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message) => {

    const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

console.log('chargement !')

if(err || res.statusCode!== 200)return

console.log('chargé avec succés')
    const trUrl = "https://api.myjson.com/bins/1buwmq";
    let userData = JSON.parse(body);
    var Sender = message.author;
    request(trUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let Tr = JSON.parse(body);
    if(!Tr) Tr = {};
    if(!Tr.time) Tr.time = Date.now() + Math.floor(Math.random()+300000);
    if(!Tr.taker) Tr.taker = "personne";
    if(!Tr.servtaker) Tr.servtaker = "pas de serveurs";
    request({ url: trUrl, method: 'PUT', json: Tr})
    var now = new Date().getTime();
    var distance = Tr.time - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
if(!userData[Sender.id]){
    message.reply("Tu n'es pas enregistré fais !register pour mettre à jour la base.")
    return;
}else{
if((Tr.time > Date.now()) && (Tr.time !== 0)){
    message.channel.send("<a:tresure:467999359724945408> - " + `Le trésor n'est pas encore récupérable, il sera récupérable dans ${minutes} minutes et ${seconds} secondes. Votre combo est de : x${userData[Sender.id].combotr}, le dernier trésor à été récupérer par : ${Tr.taker} depuis le serveur : ${Tr.servtaker}`)
    return;
}else{
  var toAddC = 50 * userData[Sender.id].combotr;
  var toAddX = 25 * userData[Sender.id].combotr;
  userData[Sender.id].combotr = userData[Sender.id].combotr +++ 1;
  userData[Sender.id].xp = userData[Sender.id].xp +++ toAddX;
  userData[Sender.id].coins = userData[Sender.id].coins +++ toAddC;
  request({ url: url, method: 'PUT', json: userData});
  Tr.taker = Sender.tag;
  Tr.servtaker = message.guild.name;
  Tr.time = Date.now() + Math.floor(Math.random()*4200000);
  message.channel.send(Sender + "Tu as gagné " + 50 * userData[Sender.id].combotr + "<a:coins:467999444567195651> " + "et " + 25 * userData[Sender.id].combotr + "<:XP:470615654639337472> " + "[combo: " + userData[Sender.id].combotr + "]");
  request({ url: trUrl, method: 'PUT', json: Tr});

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
              title:`Logs: ${new Date().toString("fr-FR")}`,
              description:`[Trésor] trésor récupéré par ${Tr.taker} | ${50 * userData[Sender.id].combotr} <a:coins:467999444567195651> ${25 * userData[Sender.id].combotr} <:XP:470615654639337472> [combo: ${userData[Sender.id].combotr}]`
          }})
      }
  }
  })
}
}
})
})
}

module.exports.help = {
    name: "tr"
}
