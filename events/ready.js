const config = require("../config.js");
const { ActivityType  } = require("discord.js")
module.exports = async (client) => {


if (config.mongodbURL || process.env.MONGO) {

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);
(async () => {
try {
await rest.put(Routes.applicationCommands(client.user.id), {
body: await client.commands,
});
console.log('\x1b[36m%s\x1b[0m', '|    🚀 Lệnh được tải thành công!')
} catch (err) {
console.log('\x1b[36m%s\x1b[0m', '|    🚀 Lệnh bị phân tâm!');
}
})();

console.log('\x1b[32m%s\x1b[0m', `|    🌼 Đăng nhập như ${client.user.username}`);

  let status = [
  {
    name: '💖𝓹𝓱𝓵𝓪𝓶 Music💖',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            startTimestamp: Date.now(),
  },
  {
            startTimestamp: Date.now(),
    name: '🖤🏳️‍🌈𝓹𝓱𝓵𝓪𝓶 Music🏳️‍🌈🖤',
  },
  {
            startTimestamp: Date.now(),
    name: '💛𝓹𝓱𝓵𝓪𝓶 Music💛',
    type: ActivityType.Watching,
  },
  {
            startTimestamp: Date.now(),
    name: '💜𝓹𝓱𝓵𝓪𝓶 Music💜',
    type: ActivityType.Listening,
  },
    {
    name: '🚩𝓹𝓱𝓵𝓪𝓶 Music🚩',
    type: ActivityType.Playing,
        startTimestamp: Date.now(),

  },
];

  
setInterval(() => {
  let random = Math.floor(Math.random() * status.length);
  client.user.setActivity(status[random])
  
}, 10000);
client.errorLog = config.errorLog
} else {
console.log('\x1b[36m%s\x1b[0m', `|    🍔 Lỗi MongoDB!`)
}
console.log('\x1b[36m%s\x1b[0m', `|    🎯 Hoạt động được thiết lập thành công!`);


if(client.config.voteManager.status === true && client.config.voteManager.api_key){
const { AutoPoster } = require('topgg-autoposter')
const ap = AutoPoster(client.config.voteManager.api_key, client)
ap.on('posted', () => {
})
}

}
