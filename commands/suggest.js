const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'suggest',
    description: 'suggest an idea',
    execute(message, args){
        message.delete({timeout: 1})
        let User = message.author;
        let suggestion = args.slice(0).join(" ");
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "suggestions");
        if(!SuggestionChannel) return message.channel.send("Suggestion channel not found, Try again later.");
        const embed = new MessageEmbed()
            .setAuthor(User.tag, User.displayAvatarURL({dynamic: true}))
            .setTitle(`New suggestion`)
            .setDescription(suggestion)
            .setColor("#E1F113")
            .setFooter('Doc Designs © 2021', 'https://media.discordapp.net/attachments/708880517516361748/817997867670568960/DDsvg.png')
            .setTimestamp()
            SuggestionChannel.send(embed).then(msg => {
                msg.react("✅")
                msg.react("❌")
            })
    }
}