import { Client, Message } from "discord.js";

import config from "./Helpers/Config";

const bot: Client = new Client();
const { TOKEN } = config;

bot.on("ready", () => {
	if (bot.user == null) throw new Error("Bot failed to login");
	console.log(`Logged in as ${bot.user.tag}`);
});

// TODO: const pingstring = `${bot.user.tag} ping`;
bot.on("message", (msg: Message) => {
	if (msg.content == "ping") {
		msg.reply("pong");
		msg.channel.send("pong");
	}
});

console.log(TOKEN);
bot.login(TOKEN);