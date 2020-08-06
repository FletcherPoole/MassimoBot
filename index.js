const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	
	if (message.content === 'help') {
		message.channel.send('are you lost bbg');
	}
	
	if (message.content === 'massimo') {
		let imageNumber = Math.floor(Math.random()* 98) + 1
		message.channel.send ( {files: ["./images/" + imageNumber + ".jpg"]} )
	}

});

client.login(process.env.token);