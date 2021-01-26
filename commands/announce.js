const { execute } = require("./customer");

module.exports = {
    name: 'announce',
    description: 'announce an embed to your server',
    async execute(message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
        let msg = args.join(" ")
        if(!msg){
            message.delete({timeout: 1})
            const invalidAnnounce = new Discord.MessageEmbed()
            .setColor('#EC1811')
            .setTitle('ERROR')
            .setAuthor('Doc Designs')
            .setDescription('Please provide a valid announcement.')
            .setTimestamp()
            .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');

            message.channel.send(invalidAnnounce);
        }
        message.delete({timeout: 1})
        const announcement = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setTitle('Announcement')
        .setDescription(`${msg}`)
        .setTimestamp()
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');
        message.channel.send(announcement);
    } else {
        message.delete({timeout: 1})
        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setTitle('ERROR')
        .setAuthor('Doc Designs')
        .setDescription('You do not have permission to use this command!')
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');

        message.channel.send(errorEmbed);
    }
    }
}