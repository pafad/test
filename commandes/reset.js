const superagent = require("superagent");
const request = require("request");

module.exports.run = async (client, message, args) => {
const url = "https://api.myjson.com/bins/n1r2y";
    request(url, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let userData = JSON.parse(body);
    let user = message.mention.users.first() || client.users.find("id", args[0]) || client.users.find("name", args.join(" "));
    if(!message.author.id == "491878353960304640"){
      message.channel.send("tu n'es pasmon développeur.")
      return;
    }else{
        if (!user) {
            message.channel.send("Mentionne un utilisateur valide.")
            return;   
        }else{
            if (!userData[user.id]) {
                message.channel.send("cet utilisateur n'est pas inscrit.")
                return;
            } else {
                delete userData[user.id];
                request({ url: url, method: 'PUT', json: userData})
                message.channel.send("l'utilisateur a été reset avec succès.")
            }
        }
    }
    })
}

module.exports.help = {
    name:"reset"
}
