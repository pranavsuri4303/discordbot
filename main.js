const {Builder, By, Key, until} = require('selenium-webdriver');
const ChessWebAPI = require('chess-web-api');

const chessAPI = new ChessWebAPI();
const Discord = require('discord.js');
const client = new Discord.Client();
 
// const prefix = '*';
 
const fs = require('fs');
 
// client.commands = new Discord.Collection();
 
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }
 
 
client.once('ready', () => {
    console.log('Chess.com Bot is online');
});
 
client.on('message', message =>{
    // if (message.content.includes("Not Rocket Destroyer")){
    //     message.reply('Destroyed');
    // }
    message.reply(message);
    // if(!message.content.startsWith(prefix) || message.author.bot) return;

    // const args = message.content.slice(prefix.length).split(/ +/);
    // const commandName = args.shift().toLowerCase();
    // if (!client.commands.has(commandName)) return;
    // const command = client.commands.get(commandName);
    // try {
    //     command.execute(message, args);

    // } 
    // catch (error) {
	//     console.error(error);
    //     message.reply('there was an error trying to execute that command!');
    // }
});
client.login('Nzk3MTM4NjI3MDQ0ODM1MzI4.X_iHMg.68EqW4DID-VJjMgGzGI-PFV45jc');