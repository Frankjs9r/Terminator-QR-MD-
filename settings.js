//*THIS DANGEROUS BUG 🐛 CODING BY ICONIC TECH ♻️ THE FATHER OF 3) THANKS FOR USING OUR PROJECT*\\

const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["27783583068@s.whatsapp.net"]
global.botnumber = "27783583068"
global.autotyping = false;
global.autorecording = false;
global.botnumber = ['27783583068']
global.DevName = "iconic tech"
global.ownerName = "Frank tech"
global.Botname = "Frank-MD QR MD"
global.versionBot = "𝟏"
global.packname = "iconic tech"
global.author = "powered by Frank tech"
global.thumb = fs.readFileSync("./TerminatorMedia/iconic.jpg")
global.ThM = 'https://files.catbox.moe/jlrljf.jpg'
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
