const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'tos',
    execute(message, client) {
        const member = message.member
        message.delete({timeout: 1})
        member.roles.add('748446894908506203');
        
}
}