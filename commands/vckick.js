module.exports = {
    name: 'vckick',
    execute(message, args, Discord){
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
        }
    }
}