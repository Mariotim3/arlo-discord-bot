const Discord = require('discord.js');

const { MessageEmbed, WebhookClient} = require('discord.js');

/*const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/995461614998409227/HAe1PGw_Hy3L82jPVSh8Pc7D484bP3WzVztPQWEsVXd4g3v-TaRCkFX-g9StD9AiXFPO'});

const embed = new MessageEmbed()
.setTitle('This is my title')
.setDescription('This is my description')
.setColor('RED')
*/

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 

const prefix = '.'

const infoEmbed = {
    title:'Info & Commands',
    color: '#FF0000',
    author: {
        name: 'Mariotim3',
        url: 'https://www.youtube.com/c/Mariotim3',
    },
    
    description: "Hello there! I'm a multi-purpose Discord bot with lots of fun commands!",
    fields: [
        {
            name: 'Commands!',
            value: 'Remember to use my prefix before initiating a command. The prefix is "." Below are some fun commands for you to use in your Discord server!',
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: true,
        },
        {
            name: 'enablepledge',
            value: "Every time a user sends a message that isn't in all capital letters, I will sing the United States National Anthem."
        },
        {
            name: 'disablepledge',
            value: "Disables the pledge."
        },
        {
            name: 'More commands coming soon!',
            value: "Please be patient. It takes a while for me to write all of the code as I'm a solo developer. I'll release some new commands soon!"
        },
    ]





}

let pledgeEnabled = false;

client.once('ready', () => {
console.log('Arlo is online!');
});




client.on('messageCreate', message => {

    if (!message.author.bot){
    console.log(message.author.tag + ": " + message.content)}
   


   if (!message.author.bot){
    if (pledgeEnabled == true){
    if (message.content.includes('a') || message.content.includes('b') || message.content.includes('c') || message.content.includes('d') || message.content.includes('e') || message.content.includes('f') || message.content.includes('g') ||message.content.includes('h') ||message.content.includes('i') ||message.content.includes('j') ||message.content.includes('k') ||message.content.includes('k') ||message.content.includes('k') ||message.content.includes('l') ||message.content.includes('m') || message.content.includes('n') || message.content.includes('o') || message.content.includes('p') || message.content.includes('q') || message.content.includes('r') || message.content.includes('s') || message.content.includes('t') || message.content.includes('u') || message.content.includes('v') || message.content.includes('w') || message.content.includes('x') || message.content.includes('y') || message.content.includes('z')){
    message.channel.send('i pledge allegenedse to the flap of the united states of americe to the republic and which it stands on nation under god idivisble with liber ty and justice for all - Ally');
     }}
    }
    if(!message.content.startsWith(prefix) | message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

/*if(command === 'ping'){
    message.channel.send('fuck fuck fuck :D');
} else if (command === 'remove_channel'){
    message.channel.delete(message);
} else if (command ==='new_channel '){
    message.guild.channels.create('new-channel');
} else if (command === 'username'){
    message.author.send(message.author.tag);
}  else */ if (command === 'disablepledge'){
pledgeEnabled = false;
message.channel.send('Pledge has been **disabled!**')
} else if (command === 'enablepledge'){
    pledgeEnabled = true;
    message.channel.send('Pledge has been **enabled!**')
} else if (command === 'info'){
    message.channel.send({embeds: [infoEmbed]})
}

/*webhookClient.send({

    content: message.content, 
    username: message.author.tag,
    color: '#FF0000'

})*/

})









client.login('BOT TOKEN');




