const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const maxVol = require("../config.js").opt.maxVol;
const db = require("../mongoDB");

module.exports = {
  name: "volume",
  description: "Cho phép bạn điều chỉnh âm lượng nhạc.",
  permissions: "0x0000000000000800",
  options: [{
    name: 'volume',
    description: 'Nhập số để điều chỉnh âm lượng.',
    type: ApplicationCommandOptionType.Integer,
    required: true
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ Không có bài hát nào được phát!!', ephemeral: true });
      }

      const vol = parseInt(interaction.options.getInteger('volume'));

      if (!vol) {
        return interaction.reply({
          content: `Current volume: **${queue.volume}** 🔊\nĐể thay đổi âm lượng, hãy nhập một số ở giữa \`1\` và \`${maxVol}\`.`,
          ephemeral: true
        });
      }

      if (queue.volume === vol) {
        return interaction.reply({ content: 'Âm lượng hiện tại đã được đặt thành **' + vol + '**!', ephemeral: true });
      }

      if (vol < 1 || vol > maxVol) {
        return interaction.reply({
          content: `Vui lòng nhập một số giữa \`1\` và \`${maxVol}\`.`,
          ephemeral: true
        });
      }

      const success = queue.setVolume(vol);

      if (success) {
        const embed = new EmbedBuilder()
          .setColor('#d291fe')
          .setAuthor({
        name: 'Âm nhạc của bạn! Quy tắc của bạn!',
        iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157528025739563088/5657-volume-icon.png?ex=6518ef7b&is=65179dfb&hm=1797c2830537a28b5c6a57564517cc509146d02383a69fb4239d7b5d55aceeed&', 
        url: 'https://www.facebook.com/PNGLammm'
    })
          .setDescription(`**Điều chỉnh âm lượng : ** **${vol}/${maxVol}**`);

        return interaction.reply({ embeds: [embed] });
      } else {
        return interaction.reply({ content: '❌ Đã xảy ra lỗi khi thay đổi âm lượng.', ephemeral: true });
      }
    } catch (e) {
      console.error(e);
    }
  },
};
