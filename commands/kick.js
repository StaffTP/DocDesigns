module.exports = {
    name: 'kick',
    description: 'A kick command',
    execute(message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
            message.delete({timeout: 1})
       const member = message.mentions.members.first();
       if(member){
        const memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.kick();
        const kickEmbed = new Discord.MessageEmbed()
        .setColor('#24F237')
        .setTitle('Success')
        .setAuthor('Doc Designs')
        .setDescription(memberTarget.displayName + ' has been kicked from Doc Designs')
        .setTimestamp()
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');
        message.channel.send(kickEmbed);
       } else {
        message.delete({timeout: 1})
        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setTitle('ERROR')
        .setAuthor('Doc Designs')
        .setDescription('You are unable to kick ' + memberTarget.displayName, 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png')
        .setFooter('Doc Designs © 2020');

        message.channel.send(errorEmbed);
       }
    }
    }
}