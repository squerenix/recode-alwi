exports.wait = () => {
	return`*「 ⌛ 」Sedang di proses...*\n\nsilahkan tunggu ± 1 min! Jika Tidak Muncul\nKemungkinan ERROR Mohon Jangan Spam.`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.baned = () => {
	return`*「 USER BANNED DETECTED 」* \nAnda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda`
}

exports.lvlon = () => {
	return`*「 ☑️ 」Sukses Mengaktifkan Fitur Leveling!*`
}

exports.lvloff = () => {
	return`*「 ☑️ 」Sukses Menonaktifkan Fitur Leveling!*`
}

exports.lvlnul = () => {
	return`*LEVELMU KOK MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*eits nah kamu belum daftar di JouganBot~ cara daftar ${prefix}daftar nama|umur*\n*contoh= ${prefix}daftar ${pushname}|15*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nkamu sudah terdaftar dengan data \n\n┏━➤nama\n┗➤${namaUser}\n┏━➤nomer\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤umur\n┗➤${umurUser}\n┏━➤waktu pendaftaran\n┗➤${time}\n\n┏━❉ *SN* ❉━\n┣⊱${serialUser}\n┗➤NOTE : jangan sampai lupa save nomor admin JouganBot~ Dan Jangan Lupa Untuk Ketik ${prefix}rules sebelum memulai botnya ya😁`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╔════ ❰ *USER* ❱ ═════❍
║┣❥ *Nama* : ${pushname}
║┣❥ *Nomer* : wa.me/${sender.split("@")[0]}
║┣❥ *Uang* : Rp${uangku}
║┣❥ *XP* : ${getLevelingXp(sender)}/${reqXp}
║┣❥ *Level* : ${getLevelingLevel(sender)}
║┣❥ *User register* : ${_registered.length}
╚════ ⸨ *MuhammadAlwiツ* ⸩  ═════❍


*GC = https://chat.whatsapp.com/DbIKMsIn5qb8m2dHXq7tFd*
*OWNER = https://wa.me/6288274362492*
*DANA = 0887437010015*

╔═════════════════❍
║⸨*ʙᴇʙᴇʀᴀᴘᴀ ꜰɪᴛᴜʀ ᴍᴀꜱɪ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇᴇʙᴀɪᴋᴀɴ!!*⸩
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *ρяєfιχ ѕααт ιиι ${prefix}* ⸩
║⧐ ⸨ *кєтιк ${prefix}rules* ⸩
║⧐ ⸨ *кєтιк ${prefix}info* ⸩
║▬▭▬▭▬▭▬▭▬▭
╚═════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔═══════════════════❍
║> *_Menu Jouganツ~_*
╠═══════════════════❍
║┏━━⊱ ❰ *MAKER MENU* ❱ ⊰━━❤︎
║┣❥︎ *${prefix}sticker* <Jika Video Max 9 Detik>
║┣❥ *${prefix}gemboktext* 110221 & Txt & Txt
║┣❥ *${prefix}nulis* <Nama/Kelas/Isi>
║┣❥ *${prefix}nulis2* <Nama/Kelas/Isi>
║┣❥ *${prefix}lovemake* <Alwi>
║┣❥ *${prefix}codbanner* <Alwi|Ganz>
║┣❥ *${prefix}textlight* <Alwi>
║┣❥ *${prefix}valorantbanner* <Alwi|Ganz>
║┣❥ *${prefix}narutobanner* <Alwi|Ganz>
║┣❥ *${prefix}darkneon* txt
║┣❥ *${prefix}candlemug* txt
║┣❥ *${prefix}lovemsg*
║┣❥ *${prefix}mugflower*
║┣❥ *${prefix}paperonglass*
║┣❥ *${prefix}romancetext*
║┣❥ *${prefix}shadowtext*
║┣❥ *${prefix}underwater*
║┣❥ *${prefix}hpotter*
║┣❥ *${prefix}woodblock*
║┣❥ *${prefix}silktext* <Alwi>
║┣❥ *${prefix}8bit* <Sahrul>
║┣❥ *${prefix}slide* <Alwi>
║┣❥ *${prefix}glitchtext* <Alwi & Ganz>
║┣❥ *${prefix}pornhub* <y & Hub>
║┣❥ *${prefix}apiteks* <AlwiApi>
║┣❥ *${prefix}tahta* <Alwi>
║┣❥ *${prefix}galaxtext* <Alwi>
║┣❥ *${prefix}makequote A*<txt> 
║┣❥ *${prefix}marvellogo*
║┣❥ *${prefix}ninjalogo*
║┣❥ *${prefix}woodtext* <Alwi>
║┣❥ *${prefix}qowheart* <Alwi>
║┣❥ *${prefix}mutgrass* <Alwi>
║┣❥ *${prefix}undergocean* <Alwi>
║┣❥ *${prefix}woodenboards* <Alwi>
║┣❥ *${prefix}wolfmetal* <Alwi>
║┣❥ *${prefix}metalictglow* <Alwi>
║┣❥ *${prefix}snow*
║┣❥ *${prefix}jokerlogo*
║┣❥ *${prefix}wetglass*
║┣❥ *${prefix}multicolor3d*
║┣❥ *${prefix}luxurygold*
║┣❥ *${prefix}galaxywallpaper*
║┣❥ *${prefix}lighttext*
║┣❥ *${prefix}puppycute*
║┣❥ *${prefix}royaltext*
║┣❥ *${prefix}heartshaped*
║┣❥ *${prefix}birthdaycake*
║┣❥ *${prefix}galaxystyle*
║┣❥ *${prefix}hologram3d*
║┣❥ *${prefix}glossychrome*
║┣❥ *${prefix}greenbush*
║┣❥ *${prefix}metallogo*
║┣❥ *${prefix}noeltext*
║┣❥ *${prefix}glittergold*
║┣❥ *${prefix}textcake*
║┣❥ *${prefix}starsnight*
║┣❥ *${prefix}wooden3d*
║┣❥ *${prefix}writegalacy*
║┣❥ *${prefix}snow3d*
║┣❥ *${prefix}birthdayday*
║┣❥ *${prefix}goldplaybutton*
║┣❥ *${prefix}silverplaybutton*
║┣❥ *${prefix}freefire*
║┣❥ *${prefix}toimg* <Tag Stiker>
║┗❥ *${prefix}ocr* <Kirim Foto Tulisan>
╚══════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔════════════════❍
║┏━━⊱  ❰ *FUN MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}mining* <Nambah Xp>
║┣❥ *${prefix}bisakah* <[Tag] Mempunyai Pacar?>
║┣❥ *${prefix}kapankah* <[Tag] Menikah>
║┣❥ *${prefix}apakah* <[Tag] Gay?>
║┣❥ *${prefix}seberapagay* [Tag]
║┣❥ *${prefix}rate* <Kirm Apapn Dgn Caption ${prefix}rate>
║┣❥ *${prefix}truth* <Wajib Jawab Jujur>
║┣❥ *${prefix}dare* <Bakal Dikasi Challenge>
║┣❥ *${prefix}hobby*
║┣❥ *${prefix}fitnah* <[Tag] & Anjg & Apaan Anjg?>
║┣❥ *${prefix}pasangan* [ERROR]
║┣❥ *${prefix}ntahlah* <Gajelas Coba Aja>
║┣❥ *${prefix}slap* <Toxic>
║┣❥ *${prefix}caklontong* <Kuis Cak Lontong>
║┣❥ *${prefix}family100* <Kuis Family100>
║┣❥ *${prefix}tebakgambar* <Suruh Nebak Gambar>
║┣❥ *${prefix}kbbi* <Pertanyaan>
║┣❥ *${prefix}dadu* <Yg Dpet Dadu Angka 6 Win>
║┣❥ *${prefix}artinama* <Nama Lu>
║┣❥ *${prefix}fakta*
║┣❥ *${prefix}covid*
║┣❥ *${prefix}bucin*
║┣❥ *${prefix}baper*
║┣❥ *${prefix}wame*
║┣❥ *${prefix}cerpen*
║┣❥ *${prefix}pantun*
║┗❥ *${prefix}alay* <txt>
╚═════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔══════════════════❍
║┏━━⊱  ❰ *SOUND MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}iri*
║┣❥ *${prefix}pale*
║┣❥ *${prefix}paplepap*
║┣❥ *${prefix}terpesona*
║┣❥ *${prefix}alay*
║┣❥ *${prefix}bernyanyi*
║┣❥ *${prefix}bwa*
║┣❥ *${prefix}ganteng*
║┣❥ *${prefix}gatal*
║┣❥ *${prefix}ladadida*
║┣❥ *${prefix}pota*
║┣❥ *${prefix}tb*
║┣❥ *${prefix}tengteng*
║┣❥ *${prefix}welot*
║┣❥ *${prefix}sound*
║┣❥ *${prefix}sound1*                                                                              
║┣❥ *${prefix}sound2*
║┣❥ *${prefix}sound3*
║┣❥ *${prefix}sound4*
║┣❥ *${prefix}sound5*
║┣❥ *${prefix}sound6*
║┣❥ *${prefix}sound7*
║┣❥ *${prefix}sound8*
║┣❥ *${prefix}sound9*
║┣❥ *${prefix}sound10*
║┣❥ *${prefix}sound11*
║┣❥ *${prefix}sound12*
║┣❥ *${prefix}sound13*
║┣❥ *${prefix}sound14*
║┣❥ *${prefix}sound15*
║┣❥ *${prefix}sound16*
║┣❥ *${prefix}bass* <Reply Audio>
║┣❥ *${prefix}tupai* <Reply Audio>
║┣❥ *${prefix}gemuk* <Reply Audio>
║┣❥ *${prefix}fast* <Reply Audio>
║┣❥ *${prefix}slow* <Reply Audio>     
║┣❥ *${prefix}play* [Link]
║┣❥ *${prefix}lirik* <Lagu>
║┣❥ *${prefix}addvn*
║┣❥ *${prefix}tts* <id BRO ANDA GAY>
║┗❥ *${prefix}joox*                
╚════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔═════════════════❍                                    
║┏━━⊱  ❰ *ANIME MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}boruto*
║┣❥ *${prefix}rize*
║┣❥ *${prefix}goku*
║┣❥ *${prefix}kaneki*
║┣❥ *${prefix}wibu*
║┣❥ *${prefix}naruto*
║┣❥ *${prefix}avatar*
║┣❥ *${prefix}wallpapernime*
║┣❥ *${prefix}minato*                                                                              
║┣❥ *${prefix}miku*
║┣❥ *${prefix}animesaran*
║┣❥ *${prefix}animesaran2*
║┣❥ *${prefix}kurumi*
║┣❥ *${prefix}hinata*
║┣❥ *${prefix}sasuke*
║┣❥ *${prefix}kakashi*
║┣❥ *${prefix}sakura*
║┣❥ *${prefix}akira*
║┣❥ *${prefix}itori*
║┣❥ *${prefix}touka*
║┣❥ *${prefix}rem*
║┣❥ *${prefix}chika*
║┗❥ *${prefix}wait* <Kirim Foto Anime>
╚════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔═════════════════❍
║┏━━⊱  ❰ *ISLAM MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}quran*
║┣❥ *${prefix}listsurah*
║┣❥ *${prefix}shalwat*
║┣❥ *${prefix}soundquran*
║┗❥ *${prefix}jsholat <namakota>*
╚═════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔══════════════════❍
║┏━━⊱  ❰ *MEDIA MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}beritahoax* [ERROR]
║┣❥ *${prefix}brainly* <Pertanyaan>
║┣❥ *${prefix}pictcewek*
║┣❥ *${prefix}pictcowok* 
║┣❥ *${prefix}cecans*
║┣❥ *${prefix}cogans*
║┣❥ *${prefix}pinterest* <Searching Foto>
║┣❥ *${prefix}husbu*
║┣❥ *${prefix}husbu2*
║┣❥ *${prefix}waifu*
║┣❥ *${prefix}waifu2*
║┣❥ *${prefix}loli*
║┣❥ *${prefix}loli2*
║┣❥ *${prefix}loli3*
║┣❥ *${prefix}hemkel* <Kata Kata Hemkel Awoakwok:v>
║┣❥ *${prefix}quoterandom*
║┣❥ *${prefix}katadoi*
║┣❥ *${prefix}katakatadilan*
║┣❥ *${prefix}neko*
║┣❥ *${prefix}nekonime*
║┣❥ *${prefix}randomanime*
║┣❥ *${prefix}randomhusbu*
║┣❥ *${prefix}randomcyberspace*
║┣❥ *${prefix}randomexo*
║┣❥ *${prefix}blackpink*
║┣❥ *${prefix}randomgame*
║┣❥ *${prefix}randommountain*
║┣❥ *${prefix}randomloli*
║┣❥ *${prefix}randomprogramer*
║┣❥ *${prefix}meme*
║┣❥ *${prefix}memeindo*
║┣❥ *${prefix}tts* <id BRO ANDA GAY>
║┣❥ *${prefix}hentai*
║┣❥ *${prefix}darkjokes* <Lampu Woii>
║┣❥ *${prefix}play* [Link]
║┣❥ *${prefix}lirik* <Lagu>
║┣❥ *${prefix}ssweb* <Website Apa Aja>
║┣❥ *${prefix}map*
║┣❥ *${prefix}kalkulator*
║┣❥ *${prefix}fototiktok*
║┣❥ *${prefix}tiktokstalk* <Username TikTod>
║┣❥ *${prefix}stalkig* <Username Ig>
║┣❥ *${prefix}afk*
║┣❥ *${prefix}unafk*
║┣❥ *${prefix}bass* <Reply Audio>
║┣❥ *${prefix}tupai* <Reply Audio>
║┣❥ *${prefix}gemuk* <Reply Audio>
║┣❥ *${prefix}fast* <Reply Audio>
║┣❥ *${prefix}slow* <Reply Audio>
║┣❥ *${prefix}ytmp4* [Link]
║┣❥ *${prefix}ytmp3* [Link]
║┣❥ *${prefix}film* namafilm
║┣❥ *${prefix}joox*
║┣❥ *${prefix}infogempa*
║┣❥ *${prefix}infocuaca*
║┣❥ *${prefix}playstore*
║┗❥ *${prefix}jadwaltv*
╚════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔═════════════════❍
║┏━━⊱  ❰ *LIMIT MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}limit*
║┣❥ *${prefix}buylimit*
║┣❥ *${prefix}dompet*
║┣❥ *${prefix}bugreport*
║┗❥ *${prefix}request*
╚═════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔════════════════❍
║┏━━⊱  ❰ *NSFW MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}pokemon*
║┣❥ *${prefix}anjing*
║┣❥ *${prefix}nsfwloli*
║┣❥ *${prefix}nsfwneko*
║┣❥ *${prefix}solo*
║┣❥ *${prefix}nekopoi*
║┣❥ *${prefix}nsfwblowjob*
║┣❥ *${prefix}nsfwtrap*
║┣❥ *${prefix}nsfwpussy*
║┣❥ *${prefix}nsfwyuri*
║┣❥ *${prefix}bokep*
║┣❥ *${prefix}randombokep* <Mau Ngapain Woy?>
║┣❥ *${prefix}ero*
║┣❥ *${prefix}nsfwloli2*
║┣❥ *${prefix}sideoppai*
║┣❥ *${prefix}nsfwwaifu*
║┣❥ *${prefix}nsfwpussy*
║┣❥ *${prefix}ecchi*
║┣❥ *${prefix}xxx* <inget dosa:)>
║┗❥ *${prefix}nekopoi* <Judul>
╚═════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔════════════════❍
║┏━━⊱  ❰ *GROUP MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}hidetag*
║┣❥ *${prefix}del*
║┣❥ *${prefix}grouplist*
║┣❥ *${prefix}groupinfo*
║┣❥ *${prefix}level*
║┣❥ *${prefix}leaderboard*
║┣❥ *${prefix}linkgc*
║┣❥ *${prefix}tagall*
║┣❥ *${prefix}otagall*
║┣❥ *${prefix}otagall2*
║┣❥ *${prefix}otagall3*
║┣❥ *${prefix}setpp*
║┣❥ *${prefix}notif*
║┣❥ *${prefix}add*
║┣❥ *${prefix}kick*
║┣❥ *${prefix}setname*
║┣❥ *${prefix}setdesc*
║┣❥ *${prefix}demote*
║┣❥ *${prefix}promote*
║┣❥ *${prefix}listadmin*
║┣❥ *${prefix}tutuptime*
║┣❥ *${prefix}bukatime*
║┣❥ *${prefix}group* [buka/tutup]
║┣❥ *${prefix}leveling* [enable/disable]
║┣❥ *${prefix}antilinkgrup* [1/0]
║┣❥ *${prefix}nsfw* [1/0]
║┣❥ *${prefix}simih* [1/0]
║┗❥ *${prefix}welcome* [1/0]
╚═════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔═════════════════❍
║┏━━━━⊱  ❰ *OWNER MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}bc*
║┣❥ *${prefix}bcgc*
║┣❥ *${prefix}spamcall*
║┣❥ *${prefix}spambrutal*
║┣❥ *${prefix}spamgmail*
║┣❥ *${prefix}spamsms*
║┣❥ *${prefix}resetlimit*
║┣❥ *${prefix}kickall*
║┣❥ *${prefix}setreply*
║┣❥ *${prefix}setprefix*
║┣❥ *${prefix}clearall*
║┣❥ *${prefix}ban*
║┣❥ *${prefix}addvn*
║┣❥ *${prefix}getvn*
║┣❥ *${prefix}listvn*
║┣❥ *${prefix}addimage*
║┣❥ *${prefix}getimage*
║┣❥ *${prefix}listimage*
║┣❥ *${prefix}addaudio*
║┣❥ *${prefix}getaudio*
║┣❥ *${prefix}listaudio*
║┣❥ *${prefix}addsticker*
║┣❥ *${prefix}getsticker*
║┣❥ *${prefix}liststicker*
║┣❥ *${prefix}chatlist*
║┣❥ *${prefix}unban*
║┣❥ *${prefix}block*
║┣❥ *${prefix}unblock*
║┣❥ *${prefix}listblock*
║┣❥ *${prefix}leave*
║┣❥ *${prefix}event* [1/0]
║┣❥ *${prefix}clone*
║┣❥ *${prefix}setmemberlimit*
║┗❥ *${prefix}setbotpp*
╚════════════════❍

▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔═════════════════❍
║┏━━━━⊱ ❰ *THANKS TO* ❱ ⊰━━❤︎
║┣➣ *Allah SWT*
║┣➣ *MuhammadAlwiツ* 
║┣➣ *AriffiRazzaq*
║┣➣ *Dilan* 
║┣➣ *Dappa*
║┗━━⊱  ⸨ *JouganBot~* ⸩  ⊰━━━
╚═════════════════❍

        ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
        ▉║█▐▉▉▐▐▍█║▍▉▏▍▍   
                                        
                               
          *© Muhammad Alwi*
          *TEAM CREATOR*        
          
                                                        
                                                                                                                                                    
*Jangan Lupa Untuk Donasi Agar Bot Selalu Aktif*
  *Dana 0887437010015*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 _LEVEL UP_ 」*
┏𖥻ꦼꦽ➳ *Nama* : ${pushname}
┣𖥻ꦼꦽ➳ *Nomer* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf kak ${pushname} limit kamu hari ini habis*\n*#buylimit untuk membeli limit*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

🍁NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍁`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nama* : ${pushname}\n┣𖥻ꦼꦽ➳ *Nomer* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
