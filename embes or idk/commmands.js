require("dotenv").config();
const { REST, Routes } = require("discord.js")

const commands = [
    {
        name: "hey",
        description: "replies hey",
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
