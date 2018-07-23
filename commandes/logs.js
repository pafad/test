const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message) => {

    const logsurl = "https://api.myjson.com/bins/wjtwa";
    request(logsurl, (err, res, body) => {

console.log('chargement !')

if(err || res.statusCode!== 200)return

console.log('chargé avec succés')
    let channel = JSON.parse(body);
    if(!channel[message.guild.id]) channel[message.guild.id] = {};
    if(!channel[message.guild.id].logs) channel[message.guild.id].logs = message.channel.id;
    request({ url: logsurl, method: 'PUT', json: channel});
    message.channel.send(`logs dans le channel [${message.channel.id}] ajouté.`)
})
}

module.exports.help = {
    name:"logs"
}