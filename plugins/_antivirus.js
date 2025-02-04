const isVirtex = /PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ/i // tambahin sendiri

export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiVirtex = isVirtex.exec(m.text)
    
    if (chat.antiVirtex && isAntiVirtex) {
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            m.reply('Bug Troli Detected\n\n' + require('util').format(m.key))
            await this.clearMessage(m.chat, m.key)
            await this.modifyChat(m.chat, 'clear', {
                includeStarred: false
            }).catch(console.log)
        }
            if (!m.isBaileys && m.text.length > 384)
            if (m.text && m.text.length >= 25000)
            if (m.messageStubType === 68) { //Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
        await conn.sendButton(m.chat, `*Font Aneh detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`, author, ['off antivirtex', '/disable antivirtex'], m)
        if (isBotAdmin && bot.restrict) {
       return m.reply('Ok!')
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    }
    return !0
}