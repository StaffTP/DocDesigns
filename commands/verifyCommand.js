const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'verify',
    async execute(message, client) {
        const channel = '734898162787155978';
        const verifiedRole = '748446894908506203';

        const memberRoleEmoji = '✅';

       const verifyEmbed = new MessageEmbed()
        .setColor('#1EEA1E')
        .setTitle('Verification')
        .setFooter('Doc Designs © 2020', 'https://cdn.discordapp.com/attachments/708880517516361748/790719901102112779/DOCDesigns.png')
        .setDescription('You must go through one level of verification to access the main discord.\n\n'
        + `React with the ${memberRoleEmoji} to gain access`);
        
        let messageEmbed = await message.channel.send(verifyEmbed);
        messageEmbed.react(memberRoleEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === memberRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(verifiedRole);
                } else {
                    return;
                }
                client.on('messageReactionRemove', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;
        
                    if (reaction.message.channel.id == channel) {
                        if (reaction.emoji.name === memberRoleEmoji) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(verifiedRole);
                        } else {
                            return;
                        }
            }
        })
    }
})}}