const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://cdn.discordapp.com/attachments/1199386824582373516/1212463323115687988/8c16425c3c40e08c8d8f52478a7cd5b9.gif?ex=65f1ed76&is=65df7876&hm=4e5a87e3dbcb14346c0e04e7e3bbb6a2fc8897d4acc6223db12e6c1c847684a7&',
    'https://cdn.discordapp.com/attachments/1199386824582373516/1212463497900851222/red-gang.gif?ex=65f1eda0&is=65df78a0&hm=18772bd8f33573f3271c5a66b1191bc0b19ff684cf07754efc651a2eb44cc125&',
    'https://cdn.discordapp.com/attachments/1199386824582373516/1212463560140259328/8a3d26897edeb20670f85de1a00b799e.gif?ex=65f1edaf&is=65df78af&hm=cd22cb00b40249d7c4421583fff2d50d7b1db0fa7936c128e4aa26c3a8fcb597&',
      // ใส่เพิ่มได้ถ้าเองต้องการ รูปใหญ่
  ];

let currentLargeImageIndex = 0;

app.get('/', (req, res) => res.send('client online'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", async () => {
    var startedAt = Date.now();
    console.log(`${client.user.username} เม็ดม่วงทำงานเรียบร้อยแล้ว !`);

    setInterval(() => {
        const currentTime = getCurrentTime();
        const currentDate = getCurrentDate();

        const r = new Discord.RichPresence()
        .setApplicationId('1155496899697180762')
        .setType('WATCHING')
        .setURL('https://youtu.be/LzAlv-wnQJY?si=NI8ZtPikq9Hb7CR_')
        .setState('Dms is closed') // คำที่ขึ้น
        .setName('𝐆𝐞𝐭 𝐫𝐞𝐚𝐥') // คำที่ขึ้น
        .setDetails(` 〈⏳${currentTime}〉 «» 〈💤 Itz${client.user.username}〉 `) // เวลาเเละชื่อของความเท่
        .setStartTimestamp(startedAt)
        .setAssetsLargeText(`<🗓️ ${currentDate}〉|〈🏓 ${Math.round(client.ws.ping)} m/s〉`) // status
        .setAssetsLargeImage(largeImages[currentLargeImageIndex]) // รูปใหญ่ไปใส่ข้างบน
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/889976848581287946/1213057913065840690/red-black-verified.gif?ex=65f41738&is=65e1a238&hm=be1d7b8811c326510230f61ae1cc1529a75d1c618ff28c1ad2e44cb72a2b9b93&') // รูปเล็ก
        .setAssetsSmallText('✧ Busy')
        .addButton('💫・whatever', 'https://discord.com/invite/aqt6thEVV7')
        .addButton('💤・Itzlevy', 'https://guns.lol/4levy')

      client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline
      client.user.setActivity(r);
      // ปรับเปลียนไปรูปต่อไป
      currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
  }, 4000); // ปรับเวลา เปลียนรูปใหญ่
});

  function getCurrentDate() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = a.toLocaleDateString("en-US", c);
    const [month, day, year] = formattedDate.split('/');
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", hour: "numeric", minute: "numeric", hour12: false };
    return a.toLocaleTimeString("th-TH", c);
}

client.login(process.env['token']);
