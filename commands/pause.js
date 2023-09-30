const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "pause",
  description: "Dừng phát nhạc hiện đang phát.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ Không có bài hát nào được phát!!', ephemeral: true });
      }

      const success = queue.pause();

      const embed = new EmbedBuilder()
        .setColor('#7645fe') 
        .setAuthor({
          name: 'Song Paused',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157296313013117049/8061-purple-pause-icon.png?ex=651817ae&is=6516c62e&hm=4596c9fab9d8b66de8b5215b2750572ced352eed67440a1134550b846b5693b9&',
          url: 'https://www.facebook.com/PNGLammm'
        })
        .setDescription(success ? '**Nhạc đã bị tạm dừng trong giây lát!!**' : '❌ Lỗi lệnh: Không thể tạm dừng bài hát')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};