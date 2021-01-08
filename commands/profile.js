const ChessWebAPI = require('chess-web-api');
const Discord = require('discord.js');

const chessAPI = new ChessWebAPI();
module.exports = {
    name: 'profile',
    description: "This is dangerous command.",
    execute(message, args){
        if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } 
        else {
            chessAPI.getPlayer(args[0])
                .then(function(response){
                    const player = response.body
                    
                    chessAPI.getPlayerStats(args[0])
                        .then(function(response){
                        const playerStats = response.body
                        data = setData(player, playerStats)
                        return message.channel.send(data);
                });
            });

            
        }

        
        
    }
}
function setData(player, playerStats) {
    var username = (("username" in player) ? player.username : null);
    var name = (("name" in player) ? player.name : player.username);
    var url = (("url" in player) ? player.url : null);
    var chessRapidRating;
    var chessBulletRating;
    var chessBlitzRating;
    var avatarURL;
    if ("chess_rapid" in playerStats){
        chessRapidRating = playerStats.chess_rapid.last.rating;
    }else{
        chessRapidRating = 'NA';
    }
    if ("chess_bullet" in playerStats){
        chessBulletRating = playerStats.chess_bullet.last.rating;
    }else{
        chessBulletRating = 'NA';
    }
    if ("chess_blitz" in playerStats){
        chessBlitzRating =  playerStats.chess_blitz.last.rating;
    }else{
        chessBlitzRating = 'NA';
    }
    if ("avatar" in player){
        avatarURL =  player.avatar;
    }else{
        avatarURL = "https://pranav-suri.com/wp-content/uploads/2021/01/chesscom_pawn-1.jpg";
    }
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(name+'\'s Profile 🔗')
        .setURL('https://www.chess.com/member/'+username)
        .addFields(
            { name: 'Chess Rapid', value: chessRapidRating, inline: true },
            { name: 'Chess Bullet', value: chessBulletRating, inline: true },
            { name: 'Chess Blitz', value: chessBlitzRating, inline: true }
        )
        .setThumbnail(avatarURL)
    return exampleEmbed;
}  
