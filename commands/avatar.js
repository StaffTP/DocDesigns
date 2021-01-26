const { User } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'Shows Avatar',
    execute(message, args, Discord){
        if (!message.mentions.users.size) {
            message.delete({timeout: 1})
        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setTitle('ERROR')
        .setAuthor('Doc Designs')
        .setDescription('Please supply a user!')
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');

        message.channel.send(errorEmbed);
        } else {
        avatarEmbed = new Discord.MessageEmbed()
        let User = message.mentions.users.first()
        avatarEmbed
        .setTitle(`${User.tag}'s Avatar`)
        .setImage(User.displayAvatarURL({dynamic: true}))
        .setColor('#EC1811')
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png')
        message.channel.send(avatarEmbed);
        }
        
    }
}