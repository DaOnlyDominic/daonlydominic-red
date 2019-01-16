const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content.startsWith('RED.dm ') && message.mentions.users.size) {
        var v=message.toString().split(' ').shift().shift().join(' ')
        var member=message.mentions.users[0]
        member.send(v)
    }
})

client.login(process.env.BOT_TOKEN);
