require("dotenv").config();
const path = require("path")
const { CommandHandler } = require("djs-commander")

const { Client, IntentsBitField, SlashCommandStringOption, EmbedBuilder } = require("discord.js")

new CommandHandler ({
    client,
    commandsPath: path.join(__dirname, 'small comand')
})


const clinet = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

clinet.login(process.env.TOKEN)

clinet.on('ready', (c) => {
    console.log('✞ loaded ✞')
});

const { REST, Routes } = require("discord.js")

clinet.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName == "hey") {
        interaction.reply("hey")
    }

    if (interaction.commandName == "key") {
        interaction.reply("key is here : https://discord.com/channels/1170656999638310952/1170657234779389982")
        interaction.react
    }

    if (interaction.commandName == "help") {
        interaction.reply("commands: /hey /key")
    }

    if (interaction.commandName == 'vasterhubscript') {
		const message = await interaction.reply({ content: '```Hi user the vaster hub is realeasing soon```', fetchReply: true });
		message.react('1175406849252663346');
	}

    if (interaction.commandName == "serverinfo") {
        let color = "16fbff";
        let server = interaction.guild.name;
        let servericon = interaction.guild.iconURL();
        const embed = new EmbedBuilder()
        .setColor(color)
        .setTitle(`${server}'s Server Info!`)
        .setThumbnail(servericon)
        .setDescription("Gives you info about the server")
        .addField(
          `Total Member Count`,
          `:green_circle: ${interaction.member.guild.memv}`
        )
      interaction.channel.send(embed)
    }
});

const commands = [
    {
        name: "hey",
        description: "replies hey",
    },
    {
        name: "key",
        description: "gives you channel that is key in"
    },
    {
        name: "help",
        description : "help command"
    }, 
    {
        name:"vasterhubscript",
        description: "Gives you a vaster hub script"
    },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () =>{
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )


        console.log("succes slash command")
    } catch (error) {
        console.log("error")
    }
})();

const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .setDescription("say what do you want")
        .addStringOption(option => option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getString("input")
        await interaction.reply(input)
    }
};


