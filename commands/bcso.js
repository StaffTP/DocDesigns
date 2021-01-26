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
                {name: 'Please download below.', value: '[Download](https://cdn.discordapp.com/attachments/708880517516361748/790703959018438666/BCSO.rar)'},
    
            )
            .setImage('https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png')
            .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');
    
            message.channel.send(newEmbed);
        } else {
            message.delete({timeout: 1})
            const errorEmbed = new Discord.MessageEmbed()
            .setColor('#EC1811')
            .setTitle('ERROR')
            .setAuthor('Doc Designs')
            .setDescription('You do not have permission to use this command!')
            .setTimestamp()
            .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');

            message.channel.send(errorEmbed);
        }
    }
}