const superagent = require("superagent")
const request = require("request")

module.exports.run = async (client, message, args) => {
    const mention = message.mentions.users.first();
    if(message.author.id != "377925283098918912"){
        message.reply("Tu n'est pas mon développeur <:chat:469113692492005376>")
        return;
    }else{
        if(!mention.id){
            message.reply("mentionne un utilisateur <:chat:469113692492005376>")
            return;
        }else{
            const url = "https://api.myjson.com/bins/n1r2y";
            request(url, (err, res, body) => {
            
            console.log('chargement !')
            
            if(err || res.statusCode!== 200)return
            
            console.log('chargé avec succés')
            let userData = JSON.parse(body);
            if(!userData[mention.id]){
                message.channel.send("cet utilisateur n'est pas enregistré")
            }else{   
            //base de données
            message.channel.send({embed:{color:Math.floor(Math.random() * 16777214) + 1,
                fields:[{
                    name: `Mana:`, 
                    value: `${userData[mention.id].currentMana}/${userData[mention.id].manaMax}`,
                    inline: true
                },
                {
                name:"Pv:",
                value:`${userData[mention.id].pv}/${userData[mention.id].PvMax}`,
                inline: true
                },
                {
                name:"Niveau",
                value:`${userData[mention.id].level}\nXp: ${userData[mention.id].xp}`,
                inline: true
                },
                {
                name:"Argent:",
                value: "<a:coins:467999444567195651> " + userData[mention.id].coins,
                inline: true
                },
                {
                name:"Trésors:",
                value:"<a:tresure:467999359724945408> " + userData[mention.id].combotr,
                inline:true
                },
                {
                name: "Reps:",
                value:"<a:rep:467999606832234496> " + userData[mention.id].rep,
                inline:true
                },
                {
                name:`Puissance: ${userData[mention.id].atk + userData[mention.id].def}`,
                value: `atk: ${userData[mention.id].atk} def: ${userData[mention.id].def}\nElement: ${userData[mention.id].element}\n spécial: ${userData[mention.id].sp}`,
                inline: false
                },
                {
                name:"Objets:",
                value:`Caserne: level ${userData[mention.id].casernelevel}\nRing: level ${userData[mention.id].ringlevel}\nArme: ${userData[mention.id].arme}`,
                inline:true
                },
                {
                name:"Pvp",
                value:`Villes conquises: ${userData[mention.id].villes}\nNombre de mercenaires: ${userData[mention.id].mercenaires}`
                }
            ],
            timestamp: new Date(),
            footer:{
            icon_url:message.author.avatarURL,
            text:"inventaire"
            }
            }});
            }
            });
        }
    }
}

module.exports.help = {
    name:"wi"
}
