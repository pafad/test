const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message, args) => {
   const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

console.log('chargement !')

if(err || res.statusCode!== 200)return

console.log('chargé avec succés')
    let userData = JSON.parse(body);
  var globalUsers = 0;
  var globalMoney = 0;
  var globalRichest = '';
  var globalRichest$ = 0;
  for(var i in userData){
     if(i.endsWith(client.users.findAll("id", userData))){
       globalMoney += userData[i].coins;
       globalUsers += 1;
       if(userData[i].coins > globalRichest$){
           globalRichest$ = userData[i].coins;
           globalRichest = userData[i].username;
       }
     }
 }
 message.channel.send({embed: {
  color: Math.floor(Math.random() * 16777214) + 1,
  title:"Stats Global",
  fields:[
  {
      name:"Joueurs",
      value:globalUsers,
      inline:true
  },
  {
      name:"classement en test",
      value:`${userData[client.users.findAll("id", userData)].username} : ${userData[client.users.findAll("id", userData)].coins}\n`,
      inline:false
  },
  {
      name: "Le plus riche:",
      value: `${globalRichest} avec ${globalRichest$} coins`
  }
],
  timestamp: new Date(),
  footer:{
      icon_url:message.author.avatarURL,
      text:"Stats Global"
      }
  }})
  })
}

module.exports.help = {
    name: "test"
  }
