const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message) => {

    const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

console.log('chargement !')

if(err || res.statusCode!== 200)return

    let userData = JSON.parse(body);
    let Sender = message.author;
    if(userData[Sender.id].element === "Pas choisi"){
    let filter = (m, user) => m.content === "Feu" || m.content === "Eau" || m.content === "Air" || m.content === "Terre" || m.content === "Ténèbres" || m.content === "Lumière" && user.id === message.author.id; 
    var collect = message.channel.createCollector(filter);
    message.reply("Choisi entre **Feu**, **Eau**, **Terre**, **Air**, **Ténèbres**, **Lumière**")
    collect.on("collect", m => {
    if(m.author.id === userData[Sender.id]){
    if(m.content === "Feu"){
        message.channel.send("Tu as choisi l'élément **Feu**")
        userData[Sender.id].element = "Feu" 
        request({ url: url, method: 'PUT', json: userData})
        collect.stop();
    }
    if(m.content === "Eau"){
        message.channel.send("Tu as choisi l'élément **Eau**")
        userData[Sender.id].element = "Eau" 
        request({ url: url, method: 'PUT', json: userData})
        collect.stop();
    }
    if(m.content === "Terre"){
        message.channel.send("Tu as choisi l'élément **Terre**")
        userData[Sender.id].element = "Terre" 
        request({ url: url, method: 'PUT', json: userData})
        collect.stop();
    }
    if(m.content === "Air"){
        message.channel.send("Tu as choisi l'élément **Air**")
        userData[Sender.id].element = "Air" 
        request({ url: url, method: 'PUT', json: userData})
        collect.stop();
    }
    if(m.content === "Ténèbres"){
        message.channel.send("Tu as choisi l'élément **Ténèbres**")
        userData[Sender.id].element = "Ténèbres" 
        request({ url: url, method: 'PUT', json: userData})
        collect.stop();
    }
    if(m.content === "Lumière"){
        message.channel.send("Tu as choisi l'élément **Lumière**")
        userData[Sender.id].element = "Lumière" 
        request({ url: url, method: 'PUT', json: userData})
        collect.stop();
    }
    }else{
        return;
    }
    })
    }else{
        message.reply(`Tu as déjà un élément, ton élément est ${userData[Sender.id].element}`)
    }
    })
}

module.exports.help = {
    name:"element"
}
