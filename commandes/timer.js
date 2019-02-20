const superagent = require("superagent") 
const request = require("request") 
module.exports.run= async(client, message, args) => {

const timeurl = "https://api.myjson.com/bins/1dn9h4"; 
   		 	
   			request(timeurl, (err, res, body) => { 
   				
   				console.log('chargement !') 
   				
   				if(err || res.statusCode!== 200)return
   				
   				 console.log('chargé avec succés') 
   				 
   				 var time = JSON.parse(body)
    
    message.channel.send("Chargement du timer...").then(m => {
    	
   	function timer() {
   
    var now = new Date().getTime();
    var distance = time[message.author.id].lastHr - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);			 

    m.edit(`${message.author.username} Ton Hr : ${hours}:${minutes}:${seconds}`);
    
    if((time[message.author.id].lastHr < Date.now()) && (time[message.author.id].lastHr === 0)){
 
    message.channel.send(`${message.author} Ton Hr est disponible !`) 
    
    }
    
    }
    
    	setInterval(timer, 1000)
    	
    	})
    
    }) 
    
	  } 
    
    module.exports.help = {
    name:"timer" 
   } 
