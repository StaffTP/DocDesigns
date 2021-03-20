module.exports = {
    name: 'paypalinfo',
    description: 'embed',
    execute(message, args, Discord) {
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
            message.delete({timeout: 1})
            const bcsoliveryEmbed = new Discord.MessageEmbed()
            .setColor('#3B7BBF')
            .setTitle('PayPal Information')
            .setDescription('Please send the payment to [Doc Designs PayPal](https://paypal.me/ESRPwilliams)')
            .addField('Note', 'The payment must be send as Friends and Family or the payment will not be accepted.', true)
            .setTimestamp()
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png')
            .setAuthor('Doc Designs');
    
            message.channel.send(bcsoliveryEmbed);
        } else {
            message.delete({timeout: 1})
            const errorEmbed = new Discord.MessageEmbed()
            .setColor('#EC1811')
            .setTitle('ERROR')
            .setAuthor('Doc Designs', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png', 'https://discord.gg/BE9HPDf7W8')
            .setDescription('You do not have permission to use this command!')
            .setTimestamp()
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');

            message.channel.send(errorEmbed);
        }
    }
}