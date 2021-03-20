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
        .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');

        message.channel.send(errorEmbed);
        } else {
        avatarEmbed = new Discord.MessageEmbed()
        let User = message.mentions.users.first()
        avatarEmbed
        .setTitle(`${User.tag}'s Avatar`)
        .setImage(User.displayAvatarURL({dynamic: true}))
        .setColor('#EC1811')
        .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
        message.channel.send(avatarEmbed);
        }
        
    }
}