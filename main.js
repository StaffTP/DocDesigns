const Discord = require('discord.js');

const client = new Discord.Client()

const prefix = '-';

const fs = require('fs');

const moment = require('moment');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    client.user.setActivity('Doc Designs');
    memberCounter(client);
    console.log('DocDesigns has started and logged in successfully.');
});

/*client.on('guildMemberAdd', member => {

    let welcomeChannelName = member.guild.channels.find(channel => channel.name === 'welcome');
    let welcomeChannel = welcomeChannel.id;

    if (!welcomeChannelName) return;


 const welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#EA1E1E')
    .setTitle("Welcome to Doc Design's", member.nickname)
    .setImage(member.displayAvatarURL({dynamic: true}))

    welcomeChannelName.send(welcomeEmbed);
}) */


client.on('message', message => {
    if(message.member != null && message.member.hasPermission('KICK_MEMBERS'));
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'paypalconfirmbcso'){

        client.commands.get('paypalconfirmbcso').execute(message, args, Discord);
    } else if (command === 'paypalconfirmbcsolivery'){
        client.commands.get('paypalconfirmbcsolivery').execute(message, args, Discord);
    } else if (command === 'checkingpaypal'){
        client.commands.get('checkingpaypal').execute(message, args, Discord);
    } else if (command === 'paypalconfirmciveup'){
        client.commands.get('paypalconfirmciveup').execute(message, args, Discord);
    } else if (command === 'paypalinfo'){
        client.commands.get('paypalinfo').execute(message, args, Discord);
    } else if (command === 'paypalann'){
        client.commands.get('paypalann').execute(message, args, Discord);
    } else if (command === 'giverole'){
        client.commands.get('giverole').execute(message, args, Discord);
    } else if (command === 'paypalconfirmsafrlivery'){
        client.commands.get('paypalconfirmsafrlivery').execute(message, args, Discord);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
    } else if (command === 'avatar'){
        client.commands.get('avatar').execute(message, args, Discord);
    } else if (command === 'installationinfo'){
        client.commands.get('installationinfo').execute(message, args, Discord);
    } else if (command === 'suggest'){
        client.commands.get('suggest').execute(message, args, Discord);
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command === 'announce'){
        client.commands.get('announce').execute(message, args, Discord);
    } else if (command === 'customer'){
        client.commands.get('customer').execute(message, args, Discord);
    } else if (command === 'paypalconfirm'){
        client.commands.get('paypalconfirm').execute(message, args, Discord);
    } else if (command === 'user-info'){
        client.commands.get('user-info').execute(message, args, Discord, moment);
    } else if (command === 'verify'){
        client.commands.get('verify').execute(message, client)
    }
});


client.login('NzkwNzEwODE1MzY2ODQwMzMw.X-Ek1Q.fPmZx5xx_QgYre58wsJnoqSazsE');