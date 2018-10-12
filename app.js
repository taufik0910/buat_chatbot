const Telegram =require('node-telegram-bot-api')
const dbot=require('dbot-js')

const token= '665897823:AAEzsfG8Rx8l4TKFXcOpT1FtliKMuPil2fA'
const taufik0910_bot = new TelegramBot (token,{polling: true});

taufik0910_bot.on('message', function (msg) {
    var charID = msg.chat.id;
    var message = msg.text.toString()
    dbot.get_response(message,function (err, result) {
        if (!err) {
            taufik0910_bot.sendMessage(charID, result)
            
        }
        
    })
    
})