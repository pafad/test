const superagent = require("superagent")
const request = require("request")
module.exports.run = async (client, message, args) => {
    const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {
    
    console.log('chargement !')
    
    if(err || res.statusCode!== 200)return
    
    console.log('chargé avec succés')
    
    const mention = message.mentions.users.first();
    //base de données
    let userData = JSON.parse(body);
    if(message.author.id != "491878353960304640"){
        message.reply("Tu n'est pas mon développeur <:chat:469113692492005376>")
        return;
    }else{
        if(!mention.id){
            message.reply("mentionne un utilisateur <:chat:469113692492005376>")
            return;
        }else{
            if(args[1] < 1){
                message.reply("spécifie un nombre de ressources")
            }else{
            userData[mention.id].combotr = args[1];
            request({ url: url, method: 'PUT', json: userData})
            message.reply(`Trésors de ${mention.tag} mis à ${args[1]}`)
            }
        }
    }
    })
}

module.exports.help = {
    name:"setcombotr"
}
