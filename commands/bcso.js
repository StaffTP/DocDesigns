const { GuildMember } = require("discord.js");

module.exports = {
    name: 'paypalconfirmbcso',
    description: 'embed',
    execute(message, args, Discord) {

        if (message.member.hasPermission('KICK_MEMBER', true)) {
            
            
            message.delete({timeout: 1})
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#21EA17')
            .setTitle('Your purchase has been confirmed :white_check_mark:')
            .setAuthor('Doc Designs')
            .setDescription('Thank you for purchasing the BCSO EUP package.')
            .addFields(
                {name: 'Please download below.', value: '[Download](yourdownloadlinkhere)'},
    
            )
            .setImage('https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png')
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
    
            message.channel.send(newEmbed);
        } else {
            message.delete({timeout: 1})
            const errorEmbed = new Discord.MessageEmbed()
            .setColor('#EC1811')
            .setTitle('ERROR')
            .setAuthor('Doc Designs')
            .setDescription('You do not have permission to use this command!')
            .setTimestamp()
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');

            message.channel.send(errorEmbed);
        }
    }
}