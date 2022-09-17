let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'Hai Kak Aku Hiro Md Owner Ku Akmal💬,Klik Menunya Untuk Menampilkan Semua Menu 😼\n\nɴᴏᴛᴇ: Bantu Subscribe Aku Yah 👉 https://youtube.com/channel/UCrGzDGJAwlNqBx2h0NMHXjA', data.namabot, 'Menunya', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: 'Jangan Dispam Ya Kak',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


