const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "help",
  description: "Nhận thông tin về bot và các lệnh.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

      const embed = new EmbedBuilder()
        .setColor(client.config.embedColor)
       .setAuthor({
        name: 'Lệnh và thông tin Bot',
        iconURL: 'https://cdn.discordapp.com/attachments/1147425299374559315/1157199346492788786/giphy.gif?ex=6517bd5f&is=65166bdf&hm=7965019c060bd364fd47895dc20b01bde3d9a4f12734edcae42a8da9cc3e5901&', 
        url: 'https://www.facebook.com/PNGLammm'
    })
        
        .setDescription("__**Dưới đây là các lệnh có sẵn:**__\n\n"+
"🎹 **Play**: Truyền phát bài hát từ một liên kết hoặc văn bản nhất định\n"+
"⏹️ **Stop**: Làm cho bot ngừng phát nhạc\n"+
"📊 **Queue**: Xem và quản lý hàng đợi bài hát\n"+
"⏭️ **Skip**: Bỏ qua bài hát hiện tại\n"+
"⏸️ **Pause**: Tạm dừng bài hát đang phát\n"+
"▶️ **Resume**: Tiếp tục bài hát đang tạm dừng\n"+
"🔁 **Loop**: Chuyển đổi chế độ vòng lặp\n"+
"🏓 **Ping**: Kiểm tra độ trễ của bot\n"+
"🗑️ **Clear**: Xóa hàng đợi bài hát\n"+
"🔄 **Autoplay**: Bật hoặc tắt tính năng tự động phát\n"+
"🔊 **Volume**: Điều chỉnh âm lượng nhạc\n"+ 
"🎧 **Filter**: Áp dụng các bộ lọc để nâng cao âm thanh")

               .setImage(`https://cdn.discordapp.com/attachments/1157578415575158805/1157578516355895297/ezgif-1-e0eec33d81.gif?ex=65191e81&is=6517cd01&hm=d7a5748823cd5ea101eac33306de1a5f6b698a203ec6f222b40383484cf9c27b&`)
        
      const button1 = new ButtonBuilder()
      .setLabel('Facebook')
      .setURL('https://www.facebook.com/PNGLammm')
      .setStyle(ButtonStyle.Link);
    const row = new ActionRowBuilder()
      .addComponents(button1);

      interaction.reply({ embeds: [embed], components: [row] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
