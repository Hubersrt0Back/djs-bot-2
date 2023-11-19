const { MessageEmbed } = require('discord.js');
 
module.exports = {
    name: 'serverinfo',
    description: 'Displays information about the server',
    execute(message) {
        const guild = message.guild;
        const createdDate = guild.createdAt.toDateString();
        const memberCount = guild.memberCount;
        const region = guild.region;
        const owner = guild.owner.user.tag;
        const verificationLevel = guild.verificationLevel;
        const roles = guild.roles.cache.map(role => role.name).join(', ');
        const channels = guild.channels.cache.filter(channel => channel.type !== 'category').size;
        const emojis = guild.emojis.cache.size;
        
        const serverInfoEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${guild.name} Server Information`)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                { name: 'Server Name', value: guild.name },
                { name: 'Server ID', value: guild.id },
                { name: 'Server Owner', value: owner },
                { name: 'Server Region', value: region },
                { name: 'Verification Level', value: verificationLevel },
                { name: 'Created Date', value: createdDate },
                { name: 'Member Count', value: memberCount },
                { name: 'Roles', value: roles },
                { name: 'Channels', value: channels },
                { name: 'Emojis', value: emojis }
            )
            .setTimestamp();
        
        message.channel.send({ embeds: [serverInfoEmbed] });
    },
};
