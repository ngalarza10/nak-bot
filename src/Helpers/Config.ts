import "dotenv/config";

const config = {
	TOKEN: process.env.BOT_TOKEN
};

if (!config.TOKEN)
	throw new Error("bot token not set");

export default config;
