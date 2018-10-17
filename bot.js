const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("501507659820957706")
setInterval(function() {
channel.send(`اديلو اديلو متسبهوش اديلو سبام سبام سبام احية احية احية احية :joy:`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
