module.exports = {
    name: 'checkingpaypal',
    description: 'embed',
    execute(message, args, Discord) {
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
            message.delete({timeout: 1})
            const bcsoliveryEmbed = new Discord.MessageEmbed()
            .setColor('#F2F224')
            .setTitle('Standby')
            .setAuthor('Doc Designs')
            .setDescription('Please standby whilst we check our PayPal for the order confirmation.')
            .setTimestamp()
            .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png');
    
            message.channel.send(bcsoliveryEmbed);
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