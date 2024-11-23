const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237692247756";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_41_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxLFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQmVmTTV1TFdCd1IxbExkUDVsUXk5TlBIbXFGVk1vVGpzRGZZWHExUGJrND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUHFJenhqT2hUZ1dGdUlROThLNnhKUVwiLFxuICBcInBob25lSWRcIjogXCI0MjVhMjg0ZC02ZDFlLTRmZmQtOGIxMC0zZDI1MTQyODg0MTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMyxcbiAgICAgIDYwLFxuICAgICAgMjA2LFxuICAgICAgMjUsXG4gICAgICAyMjYsXG4gICAgICAxMTUsXG4gICAgICAyMDgsXG4gICAgICA1NixcbiAgICAgIDIwOCxcbiAgICAgIDc0LFxuICAgICAgMTcxLFxuICAgICAgNDcsXG4gICAgICAyNTUsXG4gICAgICAyNDIsXG4gICAgICAyMDEsXG4gICAgICAxODgsXG4gICAgICAxNTcsXG4gICAgICAxNjEsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICA5MixcbiAgICAgIDIyMyxcbiAgICAgIDE1NSxcbiAgICAgIDkyLFxuICAgICAgMTc5LFxuICAgICAgNjEsXG4gICAgICAyMjcsXG4gICAgICA0MSxcbiAgICAgIDIzNSxcbiAgICAgIDI0LFxuICAgICAgMTg2LFxuICAgICAgNjQsXG4gICAgICAxNjksXG4gICAgICAxNzIsXG4gICAgICAxMjUsXG4gICAgICAxODgsXG4gICAgICAxNDIsXG4gICAgICAxMzAsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEtKWktZS0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5MjI0Nzc1Njo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc3MTI1NjI1OTM5ODM6ODBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkthMHJZQ0VOWGZpTG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTQ0toT2ttV2VOamZUVTQ3dHozOUVsMWVENCt0M2VwOXM0OEdWM1doNHhBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk0zSnJUREtwTnMreXMvMTJ2dHBXd0U1VlV4eFBZckVhSFZYY3N6LzVzZnNuRUpIdkgwbXl4T1V5VDZzSzJWTy80RkFYUkhlelI0QVBadHZsdmNtL2l3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRhbW51UWpyMUJOUjVmOFpWeGNWZUNnNnF6bXE5L0NleDZtY0doQVNJdkh5R0E1WisrdnZTeTZuRjI5Ui9MV1c5TjFqbDY4Q29BQXhsbEhrWTdjekRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5MjI0Nzc1Njo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzOTA4NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKbkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpuRy5qc29uIjogIntcImtleURhdGFcIjpcImpaczdMVmxydTlqY0tJOG5DM3NOd2JLTXpoWFpTL0ZWZ3hGZEhVK2RHd289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjUxNDY0MDE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE3ODkwNDA4ODdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
