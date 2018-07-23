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
    if(!userData[Sender.id]){
        message.reply("Tu n'es pas enregistré fais !register pour mettre à jour la base.")
        return;
    }else{
    var Sender = message.author;
    message.channel.send({embed:{color:Math.floor(Math.random() * 16777214) + 1,
        fields:[{
            name: `Mana:`, 
            value: `${userData[Sender.id].currentMana}/${userData[Sender.id].manaMax}`,
            inline: true
        },
        {
        name:"Pv:",
        value:`${userData[Sender.id].pv}/${userData[Sender.id].PvMax}`,
        inline: true
        },
        {
        name:"Niveau",
        value:`${userData[Sender.id].level}\nXp: ${userData[Sender.id].xp}`,
        inline: true
        },
        {
        name:"Argent:",
        value: "<a:coins:467999444567195651> " + userData[Sender.id].coins,
        inline: true
        },
        {
        name:"Trésors:",
        value:"<a:tresure:467999359724945408> " + userData[Sender.id].combotr,
        inline:true
        },
        {
        name: "Reps:",
        value:"<a:rep:467999606832234496> " + userData[Sender.id].rep,
        inline:true
        },
        {
        name:`Puissance: ${userData[Sender.id].atk + userData[Sender.id].def}`,
        value: `atk: ${userData[Sender.id].atk} def: ${userData[Sender.id].def}\nElement: ${userData[Sender.id].element}\n spécial: ${userData[Sender.id].sp}`,
        inline: false
        },
        {
        name:"Objets:",
        value:`Caserne: level ${userData[Sender.id].casernelevel}\nRing: level ${userData[Sender.id].ringlevel}\nArme: ${userData[Sender.id].arme}`,
        inline:true
        },
        {
        name:"Pvp",
        value:`Villes conquises: ${userData[Sender.id].villes}\nNombre de mercenaires: ${userData[Sender.id].mercenaires}`
        }
    ],
    timestamp: new Date(),
    footer:{
    icon_url:message.author.avatarURL,
    text:"inventaire"
    }
    }})
    }
    })


} 

module.exports.help = {
    name:"inventaire"
}