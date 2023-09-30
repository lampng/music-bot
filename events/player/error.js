module.exports = async (client, textChannel, e) => {
if (textChannel){
   return textChannel?.send(`**Đã gặp lỗi:** ${e.toString().slice(0, 1974)}`)
}
}
