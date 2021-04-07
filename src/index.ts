import config from "./Helpers/Config";
import discord from "discord.js";


const bot: discord.Client = new discord.Client();
const token = config.TOKEN;

console.log(token);
bot.login(token);

bot.on("ready", () => {
	if (bot.user == null) throw "Bot failed to login";
	console.log(`Logged in as ${bot.user.tag}`);
});

// TODO: const pingstring = `${bot.user.tag} ping`;
bot.on("message", msg => {
	if (msg.content == "ping") {
		msg.reply("pong");
		msg.channel.send("pong");
	}
});