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
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');

            message.channel.send(invalidAnnounce);
        }
        message.delete({timeout: 1})
        const announcement = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setDescription(`${msg}`)
        .setTimestamp()
        .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
        message.channel.send(announcement);
    } else {
        message.delete({timeout: 1})
        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#EC1811')
        .setTitle('ERROR')
        .setAuthor('Doc Designs')
        .setDescription('You do not have permission to use this command!')
        .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');

        message.channel.send(errorEmbed);
    }
    }
}