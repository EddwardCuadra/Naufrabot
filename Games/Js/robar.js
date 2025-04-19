const fs = require('fs')
const RJson = 'Games/Json/robar.json'
const robar = JSON.parse(fs.readFileSync(RJson))

const addRobar = ( sender , time ) => {
const obj = {
user : sender,
time : Date.now() + time 
}
robar.push(obj)
fs.writeFileSync(RJson,JSON.stringify(robar))
}

const checkRobar = (sender) => {
return robar.some(i => i.user === sender)
}

const timeRobar =(sender) => {
let position = false 
Object.keys(robar).forEach((i) => {
if(robar[i].user === sender) {
position = i
};})
if(position !== false){
return robar[position].time
};}

const expiredRobar = (sender) =>{
setInterval(() => {
const ahora = Date.now();
robar.forEach((item , indice) => {
if(ahora >= item.time){
robar.splice(indice,1)
fs.writeFileSync(RJson,JSON.stringify(robar))
};});
},1* 60* 1000) // verifica cada minuto:v
}

module.exports = { addRobar , checkRobar , timeRobar , expiredRobar }