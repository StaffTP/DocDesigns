module.exports = {
    name: 'paypalconfirmsafrlivery',
    description: 'embed',
    execute(message, args, Discord) {
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
            message.delete({timeout: 1})
            const bcsoliveryEmbed = new Discord.MessageEmbed()
            .setColor('#21EA17')
            .setTitle('Your purchase has been confirmed :white_check_mark:')
            .setAuthor('Doc Designs', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png', 'https://discord.gg/BE9HPDf7W8')
            .setDescription('Thank you for purchasing the SAFR Mini EUP pack.')
            .addFields(
                {name: 'Please download below.', value: '[Download](yourdownloadlinkhere)'},
    
            )
            .setImage('https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png')
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
    
            message.channel.send(bcsoliveryEmbed);
        } else {
            message.delete({timeout: 1})
            const errorEmbed = new Discord.MessageEmbed()
            .setColor('#EC1811')
            .setTitle('ERROR')
            .setAuthor('Doc Designs', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png', 'https://discord.gg/BE9HPDf7W8')
            .setDescription('You do not have permission to use this command!')
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');

            message.channel.send(errorEmbed);
        }
    }
}