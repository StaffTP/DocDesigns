module.exports = {
    name: 'ban',
    description: 'A ban command',
    execute(message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
       const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
       const reason = message.guild.members.cache.get(args.slice(1).join(" "))
       if(member){
        const memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.ban(member);
        const banEmbed = new Discord.MessageEmbed()
        .setColor('#24F237')
        .setTitle('Success')
        .setAuthor('Doc Designs')
        .setDescription(memberTarget.displayName +' has been successfully banned')
        .addField('**Reason**', reason, true)
        .setTimestamp()
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');
        message.channel.send(banEmbed);
       } else {
        message.delete({timeout: 1})
        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setTitle('ERROR')
        .setAuthor('Doc Designs')
        .setDescription('Error')
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');

        message.channel.send(errorEmbed);
       }
        }
    }
}