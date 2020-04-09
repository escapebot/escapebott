const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Escape Tarafından Geliştirilen ${client.user.tag} Aktifleştirildi!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam');
  }
  if (!msg.content.startsWith(prefix)) {
    return;

}
  if (msg.content.toLowerCase() === prefix + 'yardım' ) {
  msg.reply('Geliştiriliyor...')
}

});
client.login('Njk3NDMwMjI1MDc1NTY4NjUw.Xo3QDw.iPxLCP--5bvSGx8GAzdKbMkDXSo');
