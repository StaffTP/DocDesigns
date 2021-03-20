module.exports = {
    name: 'status',
    description: 'embed',
    execute(message, args, client, Discord) {
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
            if(args[0] === 'pending'){
                message.delete({timeout: 1})
                const pendingEmbed = new Discord.MessageEmbed()
                .setColor('#F4ED16')
                .setTitle('Your order status has updated:')
                .setDescription(`Pending`)
                .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
                message.channel.send(pendingEmbed);
            } else {
                if(args[0] === 'completed'){
                    message.delete({timeout: 1})
                    const completedEmbed = new Discord.MessageEmbed()
                    .setColor('#2AF20A')
                    .setTitle('Your order status has updated:')
                    .setDescription('Completed \n\n*Your ticket will be closed in 24 hours.*')
                    .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
                message.channel.send(completedEmbed);
                } else {
                    if(args[0] === 'inprogress'){
                        message.delete({timeout: 1})
                        const inprogressEmbed = new Discord.MessageEmbed()
                        .setColor('#2AF20A')
                        .setTitle('Your order status has updated:')
                        .setDescription('In-Progress \n\nYour order is currently being developed and we will be asking for your feedback.')
                        .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
                        message.channel.send(inprogressEmbed);
                    } else {
                        if(args[0] == 'closed'){
                            message.delete({timeout: 1})
                            const closedEmbed = new Discord.MessageEmbed()
                            .setColor('#F2180A')
                            .setTitle('Your order status has updated:')
                            .setDescription('Closed')
                            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png');
                            message.channel.send(closedEmbed);
                        }
                    }
                }
            }
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