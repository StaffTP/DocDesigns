module.exports = {
    name: 'installationinfo',
    description: 'embed',
    execute(message, args, Discord) {
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
            message.delete({timeout: 1})
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#21EA17')
            .setTitle('Installation Information')
            .setAuthor('Doc Designs')
            .setDescription('Thank you for purchasing one of our packages.')
            .addFields(
                {name: 'EUP Instructions.', value: '[Instructions Download](https://cdn.discordapp.com/attachments/708880517516361748/791030291451215962/Installation_Instructions_DOC_DESIGNS_2020.txt)'},
                {name: 'Livery Instructions.', value: '[Instructions Download(COMING SOON)](https://google.com)'},
    
            )
            .setImage('https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png')
            .setTimestamp()
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
    
            message.channel.send(newEmbed);
        } else {
            message.delete({timeout: 1})
            const errorEmbed = new Discord.MessageEmbed()
            .setColor('#EC1811')
            .setTitle('ERROR')
            .setAuthor('Doc Designs')
            .setDescription('You do not have permission to use this command!')
            .setTimestamp()
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');

            message.channel.send(errorEmbed);
        }
    }
}