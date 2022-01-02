/*

SCRIPT INI BUATAN LEXXY OFFICIAL
KALO GAK NGERTI RECODE JANGAN ASAL RECODE
MAAF KALO ADA FITUR ERROR SOALNYA
BOT INI HASIL COPY & PASTE

*/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const yts = require( 'yt-search')
const request = require('request');
const hx = require('hxz-api')
const axios = require('axios')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const { virtex, vipi } = require('./database/virtex.js')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const apikey = JSON.parse(fs.readFileSync('./apikey.json'))
const donasi = JSON.parse(fs.readFileSync('./donasi.json'))
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
//prefix = '#'

namabot = setting.namabot
ownerNomor = setting.ownerNumber
namaowner = setting.namaowner
owner = setting.ownerNumber
fake = setting.fakeNya
develop = '6285789004732'

n = '\n' // JANGAN DI GANTI TOT
aread = false //JANGAN DIUBAH TOT
let hit_today = []; //JAN UBAH
const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
thumb = fs.readFileSync("./media/thumb.jpg");
fake = fs.readFileSync("./media/fake.jpg");

//APIKEY YANG DI GUNAKAN

apikey1 = apikey.ZEKSAPI
apikey2 = apikey.LOLHUMAN
apikey3 = apikey.Fxc7API
apikey4 = apikey.ZIYAPI
apikey5 = apikey.ZEROKEY

//NOMOR DONASI

nomordana = donasi.nomorDANA
nomorpulsa = donasi.nomorPULSA
nomorgopay = donasi.nomorGOPAY
nomorovo = donasi.nomorOVO

// PEMBATAS SETTING
//================MODULE EXPORTS=================//
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
module.exports = nana = async (nana, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'BarBarKey' // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[.#]/.test(cmd) ? cmd.match(/^[.#]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')

			mess = {
				wait: '⏳ 𝑴𝒐𝒉𝒐𝒏 𝑻𝒖𝒏𝒈𝒈𝒖,𝑺𝒆𝒅𝒂𝒏𝒈 𝑫𝒊 𝑷𝒓𝒐𝒔𝒆𝒔...',
				noregis: '𝑲𝒂𝒌𝒂𝒌 𝑩𝒆𝒍𝒖𝒎 𝑹𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒔𝒊 𝑺𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝑲𝒆𝒕𝒊𝒌 #daftar', 
				prem: 'hanya bisa digunakan premium',
				banned: '# 𝑴𝒂𝒂𝒇, 𝑨𝒏𝒅𝒂 𝑺𝒖𝒅𝒂𝒉 𝑻𝒆𝒓𝒃𝒂𝒏𝒏𝒆𝒅, 𝑯𝒖𝒃𝒖𝒏𝒈𝒊 𝑶𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑫𝒊 𝑼𝒏𝒃𝒂𝒏',
				success: '✔ 𝑩𝒆𝒓𝒉𝒂𝒔𝒊𝒍',
				error: {
					stick: '[ ✘ ] 𝑴𝒂𝒂𝒇,𝑮𝒂𝒈𝒂𝒍 𝑺𝒂𝒂𝒕 𝑴𝒆𝒏𝒌𝒐𝒏𝒗𝒆𝒓𝒔𝒊 𝑮𝒂𝒎𝒃𝒂𝒓 𝑲𝒆 𝑺𝒕𝒊𝒄𝒌𝒆𝒓',
					Iv: '𝑳𝒊𝒏𝒌 𝑻𝒊𝒅𝒂𝒌 𝑽𝒂𝒍𝒊𝒅'
				},
				only: {
					group: '[ ✘ ] 𝑯𝒂𝒏𝒚𝒂 𝑩𝒊𝒔𝒂 𝑫𝒊𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑫𝒂𝒍𝒂𝒎 𝑮𝒓𝒖𝒑',
					ownerG: '[ ✘ ] 𝑯𝒂𝒏𝒚𝒂 𝑩𝒊𝒔𝒂 𝑫𝒊𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑶𝒍𝒆𝒉 𝑶𝒘𝒏𝒆𝒓 𝑮𝒓𝒖𝒑',
					ownerB: '[ ✘ ] 𝑯𝒂𝒏𝒚𝒂 𝑩𝒊𝒔𝒂 𝑫𝒊𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑶𝒍𝒆𝒉 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕',
					admin: '[ ✘ ] 𝑯𝒂𝒏𝒚𝒂 𝑩𝒊𝒔𝒂 𝑫𝒊𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏 𝑮𝒓𝒖𝒑',
					Badmin: '[ ✘ ] 𝑯𝒂𝒏𝒚𝒂 𝑩𝒊𝒔𝒂 𝑫𝒊𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑲𝒆𝒕𝒊𝒌𝒂 𝑩𝒐𝒕 𝑴𝒆𝒏𝒋𝒂𝒅𝒊 𝑨𝒅𝒎𝒊𝒏'
				}
			}

			const botNumber = nana.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const premium = require('./F3/premium');
			let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
			const isPremium = premium.checkPremiumUser(sender, _premium)
			pushname = nana.contacts[sender] != undefined ? nana.contacts[sender].vname || nana.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await nana.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const _level = JSON.parse(fs.readFileSync('./database/level.json'))
			const isRegister = registered.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : true
            const isAntilink = isGroup ? antilink.includes(from) : true
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
nana.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
nana.sendMessage(from, hasil, type, options).catch(e => {
nana.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
			var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nana.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				nana.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nana.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nana.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				nana.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			//buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}🎑`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}🏞️`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}🏞️`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}🏞️`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}🏞️`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}🌅`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}🌅`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}🌅`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}🌃`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;
           
           const fakedoc = {key: {fromMe: false, participant: `${owner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `LexxyOFC`, jpegThumbnail: fs.readFileSync(`media/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/thumb.jpg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const fakeitem = (teks) => {
           nana.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false,
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"6289523258649-1604595598@g.us" }: {})
                           },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `© 𝙁𝙖𝙧𝙙𝙞 𝘽𝙤𝙩`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
                           
//RUNTIME BIO NYA
         let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      nana.setStatus(`𝑷𝒓𝒆𝒇𝒊𝒙 : . Dan #│𝑵𝒂𝒎𝒂 : ${namabot}│𝑶𝒘𝒏𝒆𝒓 : ${namaowner}`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
      
// Baterai
	nana.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	nana.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              
//================================================================================//
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    nana.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
    const sendButVideo = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await nana.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      nana.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await nana.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        nana.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: mek,
        })
        }    
   //button lokasi Aprilia
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               nana.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "ASU",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }             
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      nana.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      nana.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };           
    
    //CLOCKSTRING
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}


			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = nana.contacts[from] != undefined ? nana.contacts[from].vname || nana.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
///Fake
var flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `𝐅𝐚𝐫𝐝𝐢 𝐁𝐎𝐓\n${Tanggal}`,
                 "title": `𝐅𝐚𝐫𝐝𝐢 𝐁𝐎𝐓`,
                 'jpegThumbnail': fs.readFileSync("./media/fake.jpg"),
                        }
	                  } 
                     }
                     
// DAFTAR DAN USER
const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}

const isUser = cekUser(sender)
const addLevelingId = (sender) => {
const obj = {id: sender, xp: 0, level: 0}
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

nomerowner = '6285340620318'
const crypto = require('crypto')

const addRegisterUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_user.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}   
///Auto Read
nana.chatRead(from, "read")

			switch(command) {
case 'menu':
case 'help':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
tod =`𝐇𝐚𝐥𝐥𝐨...
${waktoonyabro} 
╔════════════════════
║ *${namabot}*
║ *${Tanggal}*
╠════════════════════
║╭──❉ *𝗜𝗡𝗙𝗢 𝗕𝗢𝗧* ❉──
║│ꔹ 𝑷𝒓𝒆𝒇𝒊𝒙 : . # -
║│ꔹ 𝑵𝒂𝒎𝒂 : ${namabot}
║│ꔹ 𝑶𝒘𝒏𝒆𝒓 : ${namaowner}
║│ꔹ 𝑵𝒐𝒎𝒐𝒓 : wa.me/${owner}
║│ꔹ 𝑴𝒐𝒅𝒆 : SELF BOT
║╰───────────
╠════════════════════
║ *${namabot}*
║ *𝗙𝗜𝗧𝗨𝗥 𝗕𝗢𝗧*
╠════════════════════
║╭──❉ *𝗢𝗧𝗛𝗘𝗥𝗦 𝗠𝗘𝗡𝗨* ❉──
║│${prefix}donasi
║│${prefix}infosc
║│${prefix}owner
║│${prefix}report
║│${prefix}request
║╰───────────
╠════════════════════
║╭──❉ *𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨* ❉──
║│${prefix}playmp3 <lagu>
║│${prefix}tiktok <link>
║│${prefix}sticker <reply image>
║│${prefix}translatekeindo <text>
║╰───────────
╠════════════════════
║╭──❉ *𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨* ❉──
║│${prefix}bc <text>
║│${prefix}bc2 <text>
║│${prefix}clone <tag>
║│${prefix}join <linkgc>
║│${prefix}buggc <digrup>
║│${prefix}ban <tag>
║│${prefix}unban <tag>
║│${prefix}setppbot <reply img>
║│${prefix}block <tag>
║│${prefix}unblock <tag>
║╰───────────
╠════════════════════
║╭──❉ *𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨* ❉──
║│${prefix}antilink
║│${prefix}promote
║│${prefix}demote
║│${prefix}tagall
║│${prefix}tagall1
║│${prefix}tagall2
║│${prefix}tagall3
║│${prefix}hidetag
║│${prefix}add
║│${prefix}kick
║│${prefix}setppgrup
║│${prefix}setdecs
║│${prefix}sangecek
║│${prefix}gantengcek
║│${prefix}truth
║│${prefix}dare
║│${prefix}cantikcek
║│${prefix}pinterest
║╰───────────
╠════════════════════
║╭──❉ *𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨* ❉──
║│${prefix}listsurah
║│${prefix}alquran
║│${prefix}kisahnabi
║│${prefix}jadwalsholat
║╰───────────
╠════════════════════
║╭──❉ *𝗣𝗛𝗢𝗧𝗢𝗫𝗬 𝗠𝗘𝗡𝗨* ❉──
║│${prefix}romance
║│${prefix}shadow <text>
║│${prefix}cup <text>
║│${prefix}cup1 <text>
║│${prefix}burnpaper <text>
║│${prefix}lovemessage <text>
║│${prefix}undergrass <text>
║│${prefix}love <text>
║│${prefix}coffe <text>
║│${prefix}woodheart <text>
║│${prefix}woodenboard <text>
║│${prefix}summer3d <text>
║│${prefix}wolfmetal <text>
║│${prefix}nature3d <text>
║│${prefix}underwater <text>
║│${prefix}golderrose <text>
║│${prefix}summernature <text>
║│${prefix}fallleaves <text>
║│${prefix}flamming <text>
║│${prefix}harrypotter <text>
║│${prefix}carvedwood <text>
║╰───────────
╠════════════════════
║╭──❉ *𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨* ❉──
║│${prefix}luxurygold 
║│${prefix}watercolor 
║│${prefix}multicolor3d 
║│${prefix}wetglass 
║│${prefix}galaxywallpaper 
║│${prefix}lighttext 
║│${prefix}beautifulflower
║│${prefix}puppycute 
║│${prefix}royaltext 
║│${prefix}heartshaped 
║│${prefix}birthdaycake 
║│${prefix}galaxystyle 
║│${prefix}hologram3d 
║│${prefix}greenneon 
║│${prefix}glossychrome 
║│${prefix}greenbush 
║│${prefix}metallogo 
║│${prefix}noeltext 
║│${prefix}glittergold 
║│${prefix}textcake 
║│${prefix}starsnight 
║│${prefix}wooden3d 
║│${prefix}textbyname 
║│${prefix}snow3d 
║│${prefix}birthdayday 
║│${prefix}goldplaybutton 
║│${prefix}silverplaybutton 
║│${prefix}freefire 
║│${prefix}cartoongravity 
║│${prefix}anonymhacker 
║│${prefix}mlwall 
║│${prefix}pubgmaskot 
║│${prefix}aovwall 
║│${prefix}logogaming 
║│${prefix}fpslogo 
║│${prefix}avatarlolnew 
║│${prefix}lolbanner 
║│${prefix}avatardota
║╰───────────
╠════════════════════
║  *${namabot}*
╠════════════════════
║╭──❉ *SOSMED ${namaowner}* ❉──
║│1. *Group WhatsApp*
║│ _Belum Ada_
║│2. *YouTube <subscribe>*
║│ _Belum Ada_
║│3. *Instagram <Follow>*
║│ _Kosong_
║│4. *Creator ${namabot}*
║│ _Prikk_
║╰───────────
╠════════════════════
║ *MADE BY ${namaowner}*
╚════════════════════`

tod2 =`𖣘 _*${namabot}*_ `           
           but = [
          { buttonId: `${prefix}infosc`, buttonText: { displayText: '𝕀𝕟𝕗𝕠' }, type: 1 },  
         { buttonId: `${prefix}ruls`, buttonText: { displayText: 'ℝ𝕦𝕝𝕖𝕤' }, type: 1 }
                  ]
sendButloc(from, tod, tod2, thumb, but)
break

case 'virtex1': 
if (isBanned) return reply(mess.Ban) 
if (!isPremium && !isOwner && !mek.key.fromMe ) return sendButMessage (mess.only.prem) 
reply(virtex)
break

case 'random':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
if(!isOwner) return reply('Only Owner 🏃‍♂')
if (args.length == 0) return reply(`waifu husbu or neko? Example : ${prefix + command} waifu`)
o = args.join(" ")
reply(mess.wait)
oo = await getBuffer(`https://api-xcz.herokuapp.com/api/random/${o}`)
nana.sendMessage(from, oo, image, {quoted: mek, caption: '𝙉𝙞𝙝 𝙆𝙖𝙠 𝙃𝙖𝙨𝙞𝙡 𝙣𝙮𝙖\n 𝔽𝕒𝕣𝕕𝕚𝔹𝕆𝕋' })
break

case 'daftar':
    case 'verify':
    case 'register':
    case 'registrasi':{
    	if (isUser) return reply('Kamu Sudah Pernah Melakukan Registrasi Sebelumnya..')
    try {
    ppimk = await nana.getProfilePicture(`${sender.split('@')[0]}@c.us`)
    } catch {
    ppimk = `${imagebb}`
    }
    const serialUser = createSerial(10)
   addRegisterUser(sender, pushname, `20`, time, serialUser)
   daftar=`─ 「 *REGISTRATION* 」 ─

⬡ NAMA : ${pushname}
⬡ NOMOR : ${sender.split("@")[0]}
⬡ SN : ${serialUser}
⬡ REGIST TIME :
   - Hours : ${time} Wib
   - Date : ${date}`
  ppimg = await getBuffer(ppimk)
  await nana.sendMessage(from, ppimg, MessageType.image, {quoted: mek, caption: daftar, contextInfo: {"mentionedJid": [nomerowner+'@s.whatsapp.net'] }})
  addLevelingId(sender)
 }
 break
 
 case 'ban':
if (!isOwner) return reply(mess.only.ownerB)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeitem(`Nomor ${bnnd} telah dibanned!`)
break
case 'unban': 
if (!isOwner) return reply(mess.only.ownerB)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unb = ban.indexOf(ya)
ban.splice(unb, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeitem(`Nomor ${ya} telah di unban!`)
break
case 'darkjoke':
case 'memeindo':
reply(mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/${command}?apikey=${apikey2}`)
nana.sendMessage(from, buff, image, { quoted: mek, caption: 'Ngedark boss' })
break
case 'makermeme':
if (agrs.length ==0) return reply('Textnya mana om?')
mem = args.join(" ")
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme1?apikey=${apikey2}&text=${mem}`)
nana.sendMessage(from, buff, image, { quoted: mek, caption: 'Meme Generator' })
break
case 'infosc':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
war = `𖣘 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕 :
➨ 𝑭𝒊𝒕𝒖𝒓 𝑩𝒐𝒕 :
 𖣘 𝑭𝒖𝒍𝒍 𝑳𝒐𝒍 𝑯𝒖𝒎𝒂𝒏 (𝑺𝒂𝒚𝒂 𝑹𝒆𝒄𝒐𝒅𝒆)
 𖣘 𝑵𝒐 𝑨𝒏𝒊𝒎𝒆 𝑯𝒂𝒓𝒆𝒎
 𖣘 𝑯𝒂𝒍𝒂𝒍 𝑴𝒐𝒅𝒆 

➨ 𝒀𝒕 𝑶𝒘𝒏𝒆𝒓 𝑭𝒂𝒓𝒅𝒊 𝑪𝒓𝒂𝒇𝒕 𝑪𝑯
 𖣘 https://youtube.com/c/FardiCraftCH

➨ 𝑺𝒄 𝑶𝒓𝒊 𝑫𝒂𝒓𝒊 𝒀𝒕 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍
 𖣘 https://youtube.com/c/LEX4YOUU

➨ 𝑺𝒄 𝑰𝒔𝒍𝒂𝒎 𝑴𝒆𝒏𝒖 𝑫𝒂𝒓𝒊 𝒀𝒕 𝑹𝑰𝒀𝑨𝑵 1595
 𖣘 https://youtube.com/c/RIYAN1595 

➨ 𝑭𝒊𝒕𝒖𝒓 𝑩𝒂𝒏, 𝑼𝒏𝒃𝒂𝒏, 𝑽𝒊𝒓𝒕𝒆𝒙, 𝑨𝒏𝒕𝒊 𝑽𝒊𝒓𝒕𝒆𝒙 
     𝑺𝒂𝒚𝒂 𝑫𝒂𝒑𝒂𝒕 𝑫𝒂𝒓𝒊 𝑺𝒄 𝒀𝒕 𝒁𝒆𝒓𝒐𝒀𝑻
  𖣘 https://youtube.com/c/ZeroYT7
 
 ➨ 𝑭𝒊𝒕𝒖𝒓 𝑹𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒔𝒊 𝑺𝒂𝒚𝒂 𝑫𝒂𝒑𝒂𝒕 𝑫𝒂𝒓𝒊 𝒀𝒕 𝑨𝒓𝒚 𝑩𝒐𝒕𝒛
 𖣘 https://youtube.com/channel/UCl63JPeCjnj4x2eJPzPKWDw`
nana.sendMessage(from, { contentText: `${war}`, footerText: `𖣘 _*${namabot}*_ `, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝕆𝕨𝕟𝕖𝕣' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: thumb , contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break 

case 'playmp3':
case 'play':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break

case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Fardi`)
textt = args.join(" ")
reply(mess.wait)
hsel = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey2}&text=${textt}`)
nana.sendMessage(from, hsel, image, {quoted: mek, caption: '𝙉𝙞𝙝 𝙆𝙖𝙠 𝙃𝙖𝙨𝙞𝙡 𝙣𝙮𝙖\n 𝔽𝕒𝕣𝕕𝕚𝔹𝕆𝕋' })
break
case 'romance':
case 'shadow':
case 'cup':
case 'cup1':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Fardi`)
txtt = args.join (" ")
reply(mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey2}&text=${txtt}`)
nana.sendMessage(from, hasil, image, { quoted: mek, caption: '𝙉𝙞𝙝 𝙆𝙖𝙠 𝙃𝙖𝙨𝙞𝙡 𝙣𝙮𝙖\n 𝔽𝕒𝕣𝕕𝕚𝔹𝕆𝕋' })
break
case 'tiktok':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply('Link Nya Mana Kak?')
link = args.join (" ")
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey2}&url=${link}`)
hasil = await getBuffer(anu.result.link)
nana.sendMessage(from, hasil, video)
break

case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakeitem('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await nana.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
            break
case 'beban':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
var asu = `𝑫𝒂𝒔𝒂𝒓 𝒌𝒂𝒖 𝒏𝒊, 𝒃𝒂𝒏𝒕𝒖 𝒅𝒊𝒌𝒊𝒕 𝒏𝒂𝒑𝒂 :𝒗`
fakeitem(asu)
break

case 'ruls':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
far =` 𖣘 𝑹𝒖𝒍𝒆𝒔 :\n➨ 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒑𝒐𝒏 𝑩𝒐𝒕 𝑫𝒂𝒏 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒑𝒐𝒏 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕\n➨ 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑪𝒉𝒂𝒕 𝑨𝒕𝒂𝒖 𝑪𝒉𝒂𝒕 𝑨𝒏𝒆𝒉 𝑨𝒏𝒆𝒉 𝑲𝒆 𝑩𝒐𝒕 𝑴𝒂𝒖𝒑𝒖𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕\n\n➨ 𝑴𝒆𝒍𝒂𝒏𝒈𝒈𝒂𝒓 ? 𝑫𝒊 𝑩𝒂𝒏𝒏𝒆𝒅 𝑫𝒂𝒓𝒊 𝑩𝒐𝒕 (𝑻??𝒅𝒂𝒌 𝑩𝒊𝒔𝒂 𝑴𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑩𝒐𝒕 𝑳𝒂𝒈𝒊)`
far2 = `𖣘  _*${namabot}*_ `
           but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: '𝔹𝕒𝕔𝕜 𝕄𝕖𝕟𝕦' }, type: 1 },  
         { buttonId: `${prefix}donasi`, buttonText: { displayText: '𝔻𝕠𝕟𝕒𝕤𝕚' }, type: 1 }
                  ]
sendButloc(from, far, far2, thumb, but)           
break

case 'bc2':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await nana.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await nana.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	nana.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             nana.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'bc': 
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await nana.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nana.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nana.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
nana.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": ' 𝔽𝕒𝕣𝕕𝕚𝔹𝕆𝕋',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'donasi':
case 'donate':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
don =`𝑯𝒂𝒍𝒍𝒐 𝒌𝒂𝒌 𝒃𝒂𝒏𝒕𝒖 𝒅𝒐𝒏𝒂𝒔𝒊 𝒚𝒂 𝒔𝒖𝒑𝒂𝒚𝒂 𝒃𝒐𝒕 𝒍𝒆𝒃𝒊𝒉 𝒃𝒂𝒊𝒌 & 𝒃𝒊𝒂𝒓 𝒃𝒊𝒔𝒂 𝒅𝒊 𝒖𝒑𝒅𝒂𝒕𝒆 𝒕𝒆𝒓𝒖𝒔

╭──❉ *DONASI KAK* ❉─────
│➸ *DANA*: ${nomordana}
│➸ *PULSA*: ${nomorpulsa}
│➸ *GOPAY*: ${nomorgopay}
│➸ *OVO*: ${nomorovo}
└❏───────────────`
nana.sendMessage(from, { contentText: `${don}`, footerText: `𖣘 _*${namabot}*_ `, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝔹𝕒𝕔𝕜 𝕄𝕖𝕟𝕦' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: thumb , contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break 

				case 'info':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					me = nana.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					nana.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
case 'buggc':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
if (!isOwner) return reply(mess.only.ownerB)
await nana.toggleDisappearingMessages(from)
reply("mampus")
break
case 'tourl':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await nana.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
				case 'blocklist':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					nana.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nana.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
					
case 'stiker': 
				case 'sticker':
				case 's':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nana.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nana.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nana.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nana.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
					case 'group':
					if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					apri = 'PILIH BEMRO'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
        
        case 'kick':
        if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
nana.groupRemove(from, [y])
reply(`Succses kick target!`)
break
        
        //Islam , https://youtube.com/c/RIYAN1595
        case 'alquran':
        if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
        if (isBanned) return reply(mess.banned)
       if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
       reply(mess.wait)
       urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey2}`
       quran = await fetchJson(urls)
       result = quran.result
       ayat = result.ayat
       ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
       for (var x of ayat) {
           arab = x.arab
           nomor = x.ayat
           indo = x.indonesia
           ini_txt += `${arab}\n${nomor}. ${indo}\n\n`
       }
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       reply(ini_txt)
       break
       
       case 'listsurah':
       if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
       if (isBanned) return reply(mess.banned)
       reply(mess.wait)
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${apikey2}`)
       get_result = get_result.result
       ini_txt = 'List Surah:\n'
       for (var x in get_result) {
           ini_txt += `${x}. ${get_result[x]}\n`
       }
       reply(ini_txt)
       break
       
          case 'kisahnabi':
          if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
          if (isBanned) return reply(mess.banned)
       if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
       reply(mess.wait)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey2}`)
       get_result = get_result.result
       ini_txt = `Name : ${get_result.name}\n`
       ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
       ini_txt += `Umur : ${get_result.age}\n`
       ini_txt += `Tempat : ${get_result.place}\n`
       ini_txt += `Story : \n${get_result.story}`
       reply(ini_txt)
       break

case 'jadwalsholat':
      try {
      	if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
      	if (isBanned) return reply(mess.banned)
        if (args.length == 0) return reply(`Example: ${prefix + command} Pasuruan`)
        reply(mess.wait)
       daerah = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${apikey2}`)
       get_result = get_result.result
       ini_txt = `Wilayah : ${get_result.wilayah}\n`
       ini_txt += `Tanggal : ${get_result.tanggal}\n\n`
       ini_txt += `Sahur : ${get_result.sahur}\n`
       ini_txt += `Imsak : ${get_result.imsak}\n`
       ini_txt += `Subuh : ${get_result.subuh}\n`
       ini_txt += `Terbit : ${get_result.terbit}\n`
       ini_txt += `Dhuha : ${get_result.dhuha}\n`
       ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
       ini_txt += `Ashar : ${get_result.ashar}\n`
       ini_txt += `Maghrib : ${get_result.maghrib}\n`
       ini_txt += `Isya : ${get_result.isya}`
       reply(ini_txt)
        } catch (e) {			
					reply(`「 ❗ 」\n\n*MAAF, TERJADI KESALAHAN ATAU WILAYAH TIDAK DI TEMUKAN*`)
					}  
       break
       
       //pembatas islam
       
       case 'translatekeindo':
       case 'tki':
      try {
      	if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
      	if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`Example: ${prefix + command} Good People`)
        reply(mess.wait)
       a = args.join(" ")
       get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=c6b834d1e4d11dd4e4ace45d&text=${a}`)
       get_result = get_result.result
       ini_txt = `╭─❒ Translate Semua Bahasa ❒\n│─❒    Ke Bahasa Indonesia     ❒\n│\n│Dari Bahasa: ${get_result.from}\n│Asli : ${get_result.original}\n│Diterjemahkan : ${get_result.translated}\n└❏─────────────`
       reply(ini_txt)
        } catch (e) {			
					reply(`「 ❗ 」\n\n*MAAF, TERJADI KESALAHAN ATAU WILAYAH TIDAK DI TEMUKAN*`)
					}  
       break
       
        
case "closegc": 
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        nana.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        nana.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
					case 'truth':
					if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                if (isBanned) return reply(mess.banned)
					const trut =['Pernah suka sama siapa aja? benana lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nana.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
case 'dare':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                if (isBanned) return reply(mess.banned)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u APRI?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nana.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
                case 'hidetag':
                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                  if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await nana.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					nana.sendMessage(from, options, text)
					break
					case 'sangecek':
					if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					nana.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: flexx })
					break
                case 'gantengcek':
                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					nana.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: flexx })
					break
		case 'cantikcek':
		if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					nana.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: flexx })
					break
case 'pinterest':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await nana.sendMessage(from,di,image,{quoted: mek})
            break
        case 'tourl':
        if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
        if (isBanned) return reply (mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await nana.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
           
				case 'tagall':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
                                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
                                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					nana.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply('Kamu siapa?')
					anu = await nana.chats.all()
					nana.setMaxListeners(25)
					for (let _ of anu) {
						nana.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
                                case 'promote':
                                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						nana.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						nana.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nana.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						nana.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nana.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nana.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nana.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await nana.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	nana.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'toimg':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nana.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						nana.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
                                      break
                   case 'antilink':
                   if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						nana.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
				case 'clone':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await nana.getProfilePicture(id)
						buffer = await getBuffer(pp)
						nana.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
case 'request':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					const rq = body.slice(8)
					if (args.length > 300) return nana.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					nana.sendMessage('6285340620318@s.whatsapp.net', options, text, {quoted: mek})
					nana.sendMessage('6285340620318@s.whatsapp.net', options, text, {quoted: mek})
					nana.sendMessage('6285340620318@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					const rp = body.slice(8)
					if (args.length > 300) return nana.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const prii = `*[LAPORAN EROR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${rp}`
							var options = {
							text: prii,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					nana.sendMessage('6285340620318@s.whatsapp.net', options, text, {quoted: mek})
					nana.sendMessage('6285340620318@s.whatsapp.net', options, text, {quoted: mek})
					nana.sendMessage('6285340620318@s.whatsapp.net', options, text, {quoted: mek})
					reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
					break
					
case 'ttp':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} aprii`)
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ini_text}`)
                nana.sendMessage(from, ini_buffer, sticker, {quoted: mek})
                break
                case 'attp':
                if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} aprii`)
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${ini_text}`)
                nana.sendMessage(from, ini_buffer, sticker, {quoted: mek})
                break
case 'ssweb':  
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
                   if (isBanned) return reply(mess.banned)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix + command} https://google.com*`)                  
                   reply(mess.wait)
                   buffer = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${args.join(' ')}`)
                   nana.sendMessage(from, buffer, image, {caption: `done\n\nPlease Support 19 TEAM`, quoted: mek})
                   break
			    case 'sewabot2 ':
			if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
			    var menu =`_*✨Sewa Botz By ${namaowner}✨*_
╭─────────
│❏ *1 MINGGU : 10K*
│❏ *1 BULAN : 15K*
│❏ *PERMANEN : 20K*
╰─────────
╭─────────
│ *Mahal?* 
│❏ *_KARNA ON 24 JAM ⚠️_*
╰─────────
*SISTEM : BOT MASUK GROUP - TF - DONE*
╭─────────
│ *WA : wa.me/${owner}*
╰─────────`
fakeitem(menu)
break
case 'owner':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
sendKontak(from, `${owner}`, `${namaowner} ✨`)
break  
   
case 'developer':
if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
sendKontak(from, `${develop}`, `Developer Bot ✨`)
break      
                case "virtek":
                if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
   reply(`Selamat Anda Kena Prank`)
break
				case 'wait':
				if (!isUser) return reply(mess.noregis)
if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await nana.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							nana.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
default:
if (budy.startsWith('x')){
try {
return nana.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}

		
		
		
		