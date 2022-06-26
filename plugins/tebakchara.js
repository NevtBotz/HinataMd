import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakchara = conn.tebakchara ? conn.tebakchara : {}
    let id = m.chat
    if (id in conn.tebakchara) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakchara[id][0])
        throw false
    }
    let res = await fetch('https://betabotz-api.herokuapp.com/api/game/tebakchara?apikey=BetaBotz')
    let json = await res.json()
    let caption = `
    Siapakah karakter ini
    ${json.result.name}
    
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hcha untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakchara[id] = [
        await conn.sendButton(m.chat, caption, author, json.result.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakchara[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.name}\nDesk : ${json.result.desc}*`, author, null, [
                ['tebakchara', '/tebakchara']
            ], conn.tebakchara[id][0])
            delete conn.tebakchara[id]
        }, timeout)
    ]
}
handler.help = ['tebakchara']
handler.tags = ['game']
handler.command = /^tebakchara/i

export default handler

const buttons = [
    ['Hint', '/hcha'],
    ['Nyerah', 'menyerah']
]