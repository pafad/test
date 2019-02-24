const superagent = require("superagent") 
const request = require("request") 
module.exports.run= async(client, message, args) => {
    var time = Date.now() + 3600000;
    message.channel.send("Chargement du timer...").then(m => {
    	
   	function timer() {
   
    var now = new Date().getTime();
    var distance = time - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);			 
    
    setTimeout(() => {
    m.edit((time  < Date.now()) && (time === 0) ? "Disponible" : `${message.author.username} Ton Hr : ${hours}:${minutes}:${seconds}`);
    }, 250)
    if((time < Date.now()) && (time === 0)){
 
    message.channel.send(`${message.author} Ton Hr est disponible !`) 
    
    }
    
    }

setInterval(timer, 1250)
    	
    	
    
    }) 
    
	  } 
    
    module.exports.help = {
    name:"timer" 
   } 
