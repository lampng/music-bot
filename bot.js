const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { DeezerPlugin } = require("@distube/deezer");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { printWatermark } = require('./util/pw');
const config = require("./config.js");
const fs = require("fs");
const path = require('path');
require('dotenv').config();
const client = new Client({
  partials: [
    Partials.Channel, 
    Partials.GuildMember, 
    Partials.User, 
  ],
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildIntegrations, 
    GatewayIntentBits.GuildVoiceStates, 
  ],
});

client.config = config;
client.player = new DisTube(client, {
  leaveOnStop: config.opt.voiceConfig.leaveOnStop,
  leaveOnFinish: config.opt.voiceConfig.leaveOnFinish,
  leaveOnEmpty: config.opt.voiceConfig.leaveOnEmpty.status,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin(),
    new SoundCloudPlugin(),
    new YtDlpPlugin(),
    new DeezerPlugin(),
  ],
});

const player = client.player;

fs.readdir("./events", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0]; 
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

fs.readdir("./events/player", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const player_events = require(`./events/player/${file}`);
    let playerName = file.split(".")[0];
    player.on(playerName, player_events.bind(null, client));
    delete require.cache[require.resolve(`./events/player/${file}`)];
  });
});

client.commands = [];
fs.readdir(config.commandsDir, (err, files) => {
  if (err) throw err;
  files.forEach(async (f) => {
    try {
      if (f.endsWith(".js")) {
        let props = require(`${config.commandsDir}/${f}`);
        client.commands.push({
          name: props.name,
          description: props.description,
          options: props.options,
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
});



if (process.env.TOKEN || config.TOKEN) {
  client.login(process.env.TOKEN || config.TOKEN).catch((e) => {
    console.log('Lỗi TOKEN❌❌');
  });
} else {
  setTimeout(() => {
    console.log('Lỗi TOKEN❌❌');
  }, 2000);
}


if(config.mongodbURL || process.env.MONGO){
  const mongoose = require("mongoose")
  mongoose.connect(config.mongodbURL || process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(async () => {
    console.log('\x1b[32m%s\x1b[0m', `|    🍔 Đã kết nối MongoDB!`)
  }).catch((err) => {
    console.log('\x1b[32m%s\x1b[0m', `|    🍔 kết nối MongoDB thất bại!`)})
  } else {
  console.log('\x1b[32m%s\x1b[0m', `|    🍔 Lỗi MongoDB!`)
  }


const express = require("express");
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.send("Alive")
});
app.listen(port, () => console.log('\x1b[36m%s\x1b[0m', `|    🔗 Cùng lắng nghe 𝓹𝓱𝓵𝓪𝓶 Music: ${port}`));
printWatermark();