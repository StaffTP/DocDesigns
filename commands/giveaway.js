
const ms = require('ms');
module.exports = {
    name: 'giveaway',
    async execute(message, args, Discord, client) {
    const messageArray = message.content.split(" ");
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You don't have enough permissions to start a giveaway !")
    var item = "";
    const docEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'DOCDesigns');
    var time;
    var winnerCount;
    for (var i = 1; i < args.length; i++) {
      item += (args[i] + " ");
    }
    time = args[0];
    if (!time) {
      return message.channel.send(`Invalid duration provided`);
    }
    if (!item) {
      item = "No title"
    }
    var embed = new Discord.MessageEmbed();
    embed.setColor(0x3333ff);
    embed.setTitle("New Giveaway !");
    embed.setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png')
    embed.setDescription("**" + item + "**");
    embed.addField(`Duration : `, ms(ms(time), {
      long: true
    }), true);
    embed.setFooter('React to this message with <:DOCDesigns:803753084039725066> to participate !');
    var embedSent = await message.channel.send(embed);
    embedSent.react(docEmoji.id);

    setTimeout(async () => {
      try{
        const peopleReactedBot = await embedSent.reactions.cache.get(`<:DOCDesigns:803753084039725066>`).users.fetch();
        var peopleReacted = peopleReactedBot.array().filter(u => u.id !== client.user.id);
      }catch(e){
        return message.channel.send(`An unknown error happened during th draw of the giveaway **${item}** : `+"`"+e+"`")
      }
      var winner;

      if (peopleReacted.length <= 0) {
        return message.channel.send(`Not enough participants to execute the draw of the giveaway **${item}** :(`);
      } else {
        var index = Math.floor(Math.random() * peopleReacted.length);
        winner = peopleReacted[index];
      }
      if (!winner) {
        message.channel.send(`An unknown error happened during th draw of the giveaway **${item}**`);
      } else {
        console.log(`Giveaway ${item} won by ${winner.toString()}`)
        message.channel.send(`<:DOCDesigns:803753084039725066> **${winner.toString()}** has won the giveaway **${item}** ! Congratulations ! 🎉`);
      }
    }, ms(time));
 }
}