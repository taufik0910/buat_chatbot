Telegram = require('node-telegram-bot-api')
const dbot = require('dbot-js');
const token = '665897823:AAEzsfG8Rx8l4TKFXcOpT1FtliKMuPil2fA';
const bot = new Telegram(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    var message = msg.text.toString();
    dbot.get_response(message, function(err, result){
        if(!err) {
            bot.sendMessage(chatId, result)
        }else{
            console.log(err)
        }
    });
});