const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "skip",
  description: "Chuyển đổi nhạc đang được phát.",
  permissions: "0x0000000000000800",
  options: [{
    name: "number",
    description: "đề cập đến số lượng bài hát bạn muốn bỏ qua",
    type: ApplicationCommandOptionType.Number,
    required: false
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: '⚠️ Không có bài hát nào được phát!!', ephemeral: true }).catch(e => { })

      let number = interaction.options.getNumber('number');
      if (number) {
        if (!queue.songs.length > number) return interaction.reply({ content: '⚠️ Exceeded current no of songs', ephemeral: true }).catch(e => { })
        if (isNaN(number)) return interaction.reply({ content: '⚠️ Số không hợp lệ', ephemeral: true }).catch(e => { })
        if (1 > number) return interaction.reply({ content: '⚠️ Số không hợp lệ', ephemeral: true }).catch(e => { })

        try {
        let old = queue.songs[0];
        await client.player.jump(interaction, number).then(song => {
          return interaction.reply({ content: `⏯️ Skipped : **${old.name}**` }).catch(e => { })
        })
      } catch(e){
        return interaction.reply({ content: '❌ Hàng đợi trống!!', ephemeral: true }).catch(e => { })
      }
      } else {
try {
  const queue = client.player.getQueue(interaction.guild.id);
  if (!queue || !queue.playing) {
    return interaction.reply({ content: '⚠️ Không có bài hát nào được phát!!', ephemeral: true });
  }

  let old = queue.songs[0];
  const success = await queue.skip();

  const embed = new EmbedBuilder()
    .setColor('#3498db')
    .setAuthor({
      name: 'Song Skipped',
      iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157269773118357604/giphy.gif?ex=6517fef6&is=6516ad76&hm=f106480f7d017a07f75d543cf545bbea01e9cf53ebd42020bd3b90a14004398e&',
      url: 'https://www.facebook.com/PNGLammm'
    })
    .setDescription(success ? ` **BỎ QUA** : **${old.name}**` : '❌ Hàng đợi trống!')
    .setTimestamp();

  return interaction.reply({ embeds: [embed] });
}catch (e) {
          return interaction.reply({ content: '❌ Hàng đợi trống!!', ephemeral: true }).catch(e => { })
        }
      }

    } catch (e) {
    console.error(e); 
  }
  },
};