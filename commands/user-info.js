const { info } = require("console");
const { GuildMember } = require("discord.js");

module.exports = {
    name: 'user-info',
    execute(message, args, Discord, moment, map){
        let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)
        const embed = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setThumbnail(userinfoget.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`${userinfoget.user.username}'s User Info`)
        .addField('Discord Join Date:', moment(userinfoget.user.createdAt).format('LLLL'), false)
        .addField('Joined Doc Designs Date:', moment(userinfoget.user.joinedAt).format('LLLL'), false)
        .addField('User ID:', `${userinfoget.user.id}`, false)
        message.channel.send(embed);
    }
}