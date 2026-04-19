const settings = require('../settings');
module.exports = async (sock, chatId, message) => {
    const menu = `
╔══════════════════════════════╗
║    🤖  𝐒𝐂𝐎𝐓𝐓𝐘_𝐂  ⚡           ║
║      Always On, Always Ready ║
║  v${settings.version} | 110+ Commands    ║
╚══════════════════════════════╝

⚡ ─── 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 ─── ⚡
♦ help / menu
♦ ping
♦ alive
♦ owner
♦ uptime
♦ pair
♦ session
♦ deviceinfo
♦ botstatus
♦ runtime

🎵 ─── 𝐌𝐄𝐃𝐈𝐀 ─── 🎵
♦ sticker
♦ steal
♦ toimg
♦ play
♦ lyrics
♦ tts
♦ vv *(view-once → DM)*
♦ vv2 *(owner only)*
♦ getdp
♦ savestatus
♦ remini
♦ wallpaper
♦ toviewonce
♦ tourl

🛠️ ─── 𝐓𝐎𝐎𝐋𝐒 ─── 🛠️
♦ weather
♦ wiki
♦ news
♦ tr / translate
♦ calc
♦ define / define2
♦ urban
♦ qr
♦ country
♦ github
♦ currency
♦ remind
♦ time
♦ encode / decode
♦ reverse
♦ upper / lower
♦ password
♦ today
♦ fancy
♦ fliptext
♦ tinyurl
♦ ssweb
♦ texttopdf
♦ genpass
♦ say
♦ browse

🎮 ─── 𝐅𝐔𝐍 ─── 🎮
♦ joke / dadjoke
♦ fact
♦ quote
♦ motivate
♦ 8ball
♦ flip / dice
♦ choose
♦ roast
♦ ship / love
♦ compliment / insult
♦ truth / dare
♦ truthordare
♦ rate
♦ zodiac / horoscope
♦ tictactoe
♦ poll
♦ memes
♦ trivia
♦ pair
♦ xxqc

🎵 ─── 𝐀𝐔𝐃𝐈𝐎 𝐅𝐗 ─── 🎵
♦ tomp3 / toaudio / tovideo
♦ bass / robot / earrape
♦ deep / blown / toptt
♦ volaudio / volvideo

📥 ─── 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 ─── 📥
♦ tiktok / tiktokaudio
♦ instagram
♦ twitter / facebook
♦ song / song2 / video
♦ image
♦ apk
♦ ytmp3 / ytmp4

👥 ─── 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍 ─── 👥
♦ kick / kickall / kickinactive
♦ promote / demote
♦ mute / unmute
♦ lock / unlock / open / close
♦ warn / warnings / clearwarn
♦ del
♦ tagall / tag / tagadmin / hidetag
♦ antilink
♦ antibadword
♦ antispam
♦ welcome / goodbye
♦ setwelcome / setgoodbye
♦ groupinfo / admins
♦ topmembers / totalmembers
♦ setname / setdesc
♦ getlink / resetlink / link / invite
♦ groupid / grouplist
♦ add / vcf
♦ pin / announce
♦ chatbot

👑 ─── 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 ─── 👑
♦ mode
♦ ban / unban
♦ bc / broadcast
♦ autoreply
♦ alwaysonline
♦ join / leave
♦ block / unblock / unblockall
♦ setbio / setname / setprofilepic
♦ setbotname / setprefix
♦ react / online
♦ restart
♦ tostatus
♦ autosavestatus
♦ antiviewonce
♦ autoreact / autoread
♦ anticall / antidelete
♦ lastseen / freezelastseen
♦ readreceipts
♦ disk / setwarn / listwarn
♦ afk

🤖 ─── 𝐀𝐈 ─── 🤖
♦ ai / ask / gpt
♦ deepseek
♦ teach
♦ translate2

📖 ─── 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 ─── 📖
♦ bible
♦ quran

🔍 ─── 𝐒𝐄𝐀𝐑𝐂𝐇 ─── 🔍
♦ imdb
♦ shazam
♦ yts

✨ ─── 𝐍𝐄𝐖 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ─── ✨
♦ cashapp
♦ confession
♦ rizz
♦ compliment2
♦ advice
♦ pickup
♦ hack *(fun)*
♦ aesthetic
♦ wouldyourather
♦ funfact
♦ whoami

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 _Scotty_C — Weaving Your Experience_ ⚡
`;
    await sock.sendMessage(chatId, { text: menu }, { quoted: message });
};
