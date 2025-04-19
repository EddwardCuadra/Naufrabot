const fs = require("fs");
const Wel = JSON.parse(fs.readFileSync('./settings/Grupo/Json/welkom.json'))
const welAwal = `🥀「 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎 / 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐀 」🔥
  🎉 𝙴𝚂𝙿𝙴𝚁𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝚂𝙴𝙰 𝙳𝙴 𝚃𝚄 𝙰𝙶𝚁𝙰𝙳𝙾 😚
  👑 𝐍𝐨𝐦𝐛𝐫𝐞 : @num
  🌎 𝐆𝐫𝐮𝐩𝐨 : @Group
  👥 𝐌𝐢𝐞𝐦𝐛𝐫𝐨𝐬 : @men
  🔥 𝐁𝐨𝐭 : @Bot
  🧑‍💻 𝐎𝐰𝐧𝐞𝐫 : @creador
  🍀 𝐍𝐨𝐭𝐚 : 𝐏𝐚𝐫𝐚 𝐄𝐦𝐩𝐞𝐳𝐚𝐫 𝐀 𝐔𝐬𝐚𝐫
   𝐄𝐥 𝐁𝐨𝐭 𝐃𝐢𝐠𝐢𝐭𝐞 [ 𝐌𝐞𝐧𝐮 ]`;
const byeAwal = `🥀「 𝐒𝐀𝐋𝐈𝐎 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎  」💤
  𝐄𝐬𝐭𝐚𝐫𝐞𝐦𝐨𝐬 𝐦𝐞𝐣𝐨𝐫 𝐬𝐢𝐧 𝐭𝐢 😹
  👑 𝐍𝐨𝐦𝐛𝐫𝐞 : @num
  🌎 𝐆𝐫𝐮𝐩𝐨 : @Group
  👥 𝐌𝐢𝐞𝐦𝐛𝐫𝐨𝐬 : @men
  🔥 𝐁𝐨𝐭 : @Bot
  🧑‍💻 𝐎𝐰𝐧𝐞𝐫 : @creador
  🍀 𝐍𝐨𝐭𝐚 : 𝐔𝐧𝐨 𝐦𝐚𝐬  , 𝐮𝐧𝐨 𝐦𝐞𝐧𝐨𝐬 , 
  𝐦𝐞 𝐝𝐚 𝐢𝐠𝐮𝐚𝐥 , 𝐚𝐭𝐞𝐧𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫`;

const addWel = (from , groupName) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].Grupo === from) {
      position = true;
    }
  });
  if (position === false) {
    const obj = { 
      Grupo : from, 
      Nombre : groupName,
      Join : welAwal,
      Bay : byeAwal
    };
    Wel.push(obj);
    fs.writeFileSync('./settings/Grupo/Json/welkom.json', JSON.stringify(Wel, null, 2)+'\n');
    return false;
  }
};

///edita la bienvenida 
const EditJoin = (from, q) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].Grupo === from) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].Join = q;
fs.writeFileSync('./settings/Grupo/Json/welkom.json', JSON.stringify(Wel , null , 2)+'\n');
  }
};
//edita la despedida 
const EditBay = (from, q) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].Grupo === from) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].Bay = q;
    fs.writeFileSync('./settings/Grupo/Json/welkom.json', JSON.stringify(Wel , null , 2)+'\n');
  }
};
///checa si el grupo se encuentra en el json
 const checkOfWegl = (id) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].Grupo === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].Grupo;
    }
};
//envia el texto del json

        const checkOfWel = (id) => {
            let status = false
            Object.keys(Wel).forEach((i) => {
                if (Wel[i].Grupo === id) {
                    status = true
                }
            })
            return status
        }
        
const TextOfWel = (id) => {
let position = false
Object.keys(Wel).forEach((i) => {
if (Wel[i].Grupo === id) {
position = i
}
})
if (position !== false) {
return Wel[position].Join
}
}

const TextOfBay = (id) => {
let position = false
Object.keys(Wel).forEach((i) => {
if (Wel[i].Grupo === id) {
position = i
}
})
if (position !== false) {
return Wel[position].Bay
}
}

module.exports = {
  Wel,
  addWel,
  EditJoin,
  EditBay,
  checkOfWel,
  TextOfWel,
  TextOfBay
};
