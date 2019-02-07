const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'ching') {
    	message.reply('CHONG!');
  	}
});
client.on('message', message=> {
    if (message.content === 'Big') {
        message.reply('Chungus')
    }
});
client.on('message', message=> {
    if (message.content === 'School') {
        message.reply('Sucks')
    }
});
client.on('message', message=> {
    if (message.content === 'Shaggy') {
        message.reply('Is better than Thanos.')
    }
});
client.login(process.env.BOT_TOKEN);
