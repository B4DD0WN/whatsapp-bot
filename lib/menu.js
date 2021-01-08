const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))


/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/dk_tog/

Best regards, B4DD0WN.`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨
=======================
Creator:B4DD0WN BOT
=======================
. *${prefix}sticker*
. *${prefix}stickergif*
. *${prefix}quotemaker*
. *${prefix}nulis*
=======================
Islam:
=======================
. *${prefix}infosurah*
. *${prefix}surah*
. *${prefix}tafsir*
. *${prefix}ALaudio*
. *${prefix}jsolat*
=======================
Premium:
=======================
. *${prefix}pornhub*
. *${prefix}simsimi*
=======================
Download:
=======================
. *${prefix}instagram*
. *${prefix}ytmp3*
. *${prefix}ytmp4*
=======================
Search Any:
=======================
. *${prefix}images*
. *${prefix}sreddit*
. *${prefix}resep*
. *${prefix}nekopoi*
. *${prefix}stalkig*
. *${prefix}wiki*
. *${prefix}cuaca*
. *${prefix}chord*
. *${prefix}ss*
. *${prefix}play*
. *${prefix}whatanime*
=======================
Random Teks:
=======================
. *${prefix}fakta*
. *${prefix}pantun*
. *${prefix}katabijak*
. *${prefix}quote*
=======================
Random Images:
=======================
. *${prefix}anime*
. *${prefix}kpop*
. *${prefix}memes*
=======================
Lain-lain:
=======================
. *${prefix}tts*
. *${prefix}translate*
. *${prefix}resi*
. *${prefix}ceklokasi*
. *${prefix}shortlink*
=======================
Tentang Bot:
=======================
. *${prefix}tnc*
. *${prefix}donasi*
. *${prefix}ownerbot*
. *${prefix}join*
=======================
Owner Bot:
=======================
. *${prefix}ban* - banned
. *${prefix}bc* - promosi
. *${prefix}leaveall* - keluar semua grup
. *${prefix}clearall* - hapus semua chat

}

exports.textAdmin = () => {
    return `
========================
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
=======================
. *${prefix}kickall*
-owner adalah pembuat grup.
=======================
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!
=======================
. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*
`
}
=======================
=======================
social media creator
=======================
instagram: instagram.com/dk_tog
github: https://github.com/B4DD0WN
=======================
Donasi
=======================
exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu bisa membantu dengan cara:

pulsa: 081230292051
saweria: https://saweria.co/B4DD0WN

Donasi akan digunakan untuk pengaktifan bot ini!.

Terimakasih.`
}
=======================