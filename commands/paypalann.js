module.exports = {
    name: 'paypalann',
    description: 'embed',
    execute(message, args, Discord) {


        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){


            message.delete({timeout: 1})
            const bcsoliveryEmbed = new Discord.MessageEmbed()
            .setColor('#3B7BBF')
            .setTitle('PayPal Information')
            .setAuthor('Doc Designs', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png', 'https://discord.gg/BE9HPDf7W8')
            .setDescription('Please send the payment to [Doc Designs PayPal](https://paypal.me/ESRPwilliams)')
            .addField('Note', 'The payment must be send as Friends and Family or the payment will not be accepted.', true)
            .addField('Payment Completed?', 'Please make a ticket from <#736042215524007976> and inform us of which product you have purchased.')
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