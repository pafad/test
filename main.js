const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent")
const request = require("request")
const prefix = config.prefix;
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

fs.readdir("./commandes/", (err, files) => {
  
  if(err) console.log(err);

  let jsFile = files.filter(f => f.split(".").pop() === "js")

  if(jsFile.length <= 0 ){
     console.log("Coudln't find commands")
     return;
  }

  jsFile.forEach((f, i) =>{
    let props = require(`./commandes/${f}`)
    console.log(`${f} loaded !`)
    client.commands.set(props.help.name, props)
  })
  console.log(`${jsFile.length} commands loaded !`)
})

client.on("ready", () => {
  client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
  console.log(`${client.user.tag} connecté !`)
})
//rejoins un serv
client.on("guildCreate", async guild => {
  client.channels.get("429210276815175682").send(`j'ai rejoin le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
  client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
})
//part d'un serv
client.on("guildDelete",async guild => {
  client.channels.get("429210276815175682").send(`j'ai quitté le serveur ${guild.name}[${guild.id}] dirigé par: ${guild.owner.user.tag} ayant ${guild.members.size} membres!`)
  client.user.setActivity(`${prefix}help sur ${client.guilds.size} serveurs by @αмαтєяαѕυ.exe#8754 `, {type: "WATCHING"})
	
})
//définir message
client.on('message', async message =>{
    //blacklist du bot
    if(message.author.bot)return;
 //régen de mana je teste
    const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

    console.log('chargement !')

    if(err || res.statusCode!== 200)return;

    console.log('chargé avec succés')
  //base de données
    let userData = JSON.parse(body);
    var Sender = message.author;
    if(!userData[Sender.id])return;
    userData[Sender.id].secondMana = Date.now() + 45000;
    
    var now = new Date().getTime();
    var distance = userData[Sender.id].secondMana - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    request({ url: url, method: 'PUT', json: userData})
    if((userData[Sender.id].secondMana > Date.now()) && (userData[Sender.id].secondMana !== 0)){
       return;
    }else{
      userData[Sender.id].currentMana++;
      request({ url: url, method: 'PUT', json: userData})
    }
    })
  if(!message.content.startsWith(prefix))return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = client.commands.get(cmd.slice(prefix.length));
  if(commandFile) commandFile.run(client, message, args);
});
client.login(process.env.token);
