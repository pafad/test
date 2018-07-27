const request = require("request")
const superagent = require("superagent")
module.exports.run = async (client, message, args) => {
const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

    console.log('chargement !')

    if(err || res.statusCode!== 200)return;

    console.log('chargé avec succés')
  //base de données
    let userData = JSON.parse(body);
  var globalUsers = 0;
  var globalRichest = '';
  var globalRichest$ = 0;
  for(var i in userData){
     if(i.endsWith(client.users.findAll("id", userData))){
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
      name:"classement test",
      value:`${userData[i].username}: ${userData[i].coins}`,
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
