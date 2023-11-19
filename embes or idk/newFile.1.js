const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Vasterhubscript")
        .setDescription("Gives you script of vaster hub"),
    async execute(interaction, clinet) {
        const message =  await interaction.reply({
            content: "```no vaster hub :(```",
            fetchreply: true

        });

        const emoji = clinet.guilds
    },
};
