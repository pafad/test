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
  if(!userData[Sender.id]) userData[Sender.id]  = {};
  if(!userData[Sender.id].id) userData[Sender.id].id = Sender.id;
  if(!userData[Sender.id].xp) userData[Sender.id].xp = 0;
  if(!userData[Sender.id].level) userData[Sender.id].level = 1;
  if(!userData[Sender.id].rep) userData[Sender.id].rep = 0;
  if(!userData[Sender.id].LastRep) userData[Sender.id].LastRep = Date.now() + 86400000;
  if(!userData[Sender.id].coins) userData[Sender.id].coins = 1000;
  if(!userData[Sender.id].combotr) userData[Sender.id].combotr = 0;
  if(!userData[Sender.id].mercenaires) userData[Sender.id].mercenaires = 0;
  if(!userData[Sender.id].manaMax) userData[Sender.id].manaMax = 100;
  if(!userData[Sender.id].currentMana) userData[Sender.id].currentMana = 100;
  if(!userData[Sender.id].secondMana) userData[Sender.id].secondMana = 60000;
  if(!userData[Sender.id].casernelevel) userData[Sender.id].casernelevel = 1;
  if(!userData[Sender.id].atk) userData[Sender.id].atk = 1;
  if(!userData[Sender.id].def) userData[Sender.id].def = 1;
  if(!userData[Sender.id].pv) userData[Sender.id].pv = 200;
  if(!userData[Sender.id].tempsForPv) userData[Sender.id].tempsForPv = 60000;
  if(!userData[Sender.id].PvMax) userData[Sender.id].PvMax = 200
  if(!userData[Sender.id].villes) userData[Sender.id].villes = 0;
  if(!userData[Sender.id].ringlevel) userData[Sender.id].ringlevel = 1;
  if(!userData[Sender.id].mine) userData[Sender.id].mine = 12;
  if(!userData[Sender.id].arme) userData[Sender.id].arme = {};
  if(!userData[Sender.id].sp) userData[Sender.id].sp = {};
  if(!userData[Sender.id].xpForTr) userData[Sender.id].xpForTr = 1000;
  if(!userData[Sender.id].coinsForTr) userData[Sender.id].coinsForTr = 500;
  if(!userData[Sender.id].element) userData[Sender.id].element = "Pas choisi";
  if(!userData[Sender.id].mineall)  userData[Sender.id].mineall = userData[Sender.id].mine * userData[Sender.id].currentMana;
  if(!userData[Sender.id].tempsForMercenaire) userData[Sender.id].tempsForMercenaire = 30000;
  if(!userData[Sender.id].LastDaily) userData[Sender.id].LastDaily = Date.now() + 86400000;
  if(!userData[Sender.id].username) userData[Sender.id].username = message.author.username;
  if(!userData[Sender.id].items) userData[Sender.id].items = {}
  request({ url: url, method: 'PUT', json: userData})
  message.channel.send("Tu es enregistré, fais !inventaire pour voir ton inventaire")
})
}

module.exports.help = {
    name:"register"
}