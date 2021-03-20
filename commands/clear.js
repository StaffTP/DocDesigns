module.exports = {
    name: 'clear',
    description: 'clear messages',
    async execute(message, args, Discord) {
        if(message.member.roles.cache.some(r => r.name === "Support & Customer Service")){
        if(!args[0]) return message.reply("Please enter the amount of messages you would like to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a number.");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages at a time!")
        if(args[0] < 1) return message.reply("You must delete at least one message.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    } else if(!message.member.roles.cache.some(r => r.name === "Support & Customer Service")) {
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