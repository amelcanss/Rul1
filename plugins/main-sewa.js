let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.ibb.co/BzR1jRq/08a088fe953b.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by Akmal",
        "description": `
┌「 *Sewa bot* 」
│     
├ 1 Grup / 30 Hari
├ 20 World Lock/7,000 Dana
├ Rp. 10,000 Telkomsel
│
├ 1 Premium / Permanent
├ Rp. 120 World Lock/10,000 Dana
├ Rp. 15,000 Telkomsel
│
├ tertarik? hubungi: 
├ @6281269734000 (Akmal)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": Niat Sewa Ga?
            },
            "businessOwnerJid": "6281269734000@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6288217277973\n\nowner number : wa.me/6281269734000"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
