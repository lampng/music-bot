const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
      .setAuthor({
        name: 'Hiện đang phát một Bản nhạc',
        iconURL: 'https://cdn.discordapp.com/attachments/1140841446228897932/1144671132948103208/giphy.gif', 
        url: 'https://www.facebook.com/PNGLammm'
    })
    .setDescription(`\n ‎ \n▶️ **Chi tiết :** **${song?.name}**\n▶️ **Tận hưởng trải nghiệm âm nhạc đỉnh cao. ** \n▶️ **Nếu liên kết bị hỏng khi phát lại, hãy thử đưa ra truy vấn.**`)
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1059063191981793371/rg_thicc-1.gif`)
    .setColor('#FF0000')
    .setFooter({ text: 'Sử dụng /help để biết thêm thông tin' });
      
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}