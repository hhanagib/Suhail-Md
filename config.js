const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kaveesharashmikarashmika5677@gmail.com"
global.location="colombo,SriLanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://wa.me/message/YNOSDH2GQLZSA1";
global.gurl  =process.env.GURL  || "https://wa.me/message/YNOSDH2GQLZSA1";
global.website=process.env.GURL || "https://wa.me/message/YNOSDH2GQLZSA1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94724800886" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94724800886";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94724800886";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94724800886";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,94724800886";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_46_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK01MYW1HYkNYQ1JYNnp4cUg3a25SckE0T1hLMWRoSEVDWlJoM3RnL0ZIVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NjA1NDg1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjAwMUM1QzFGNjM3NUVCMThBMDc2MEM3NEY5Q0NCN0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTI1OTcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjYwNTQ4NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNGRDdBOTE4QjVGOEU3RkQ0MzgwMEVBQTUyREJERDlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTkyNTk3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZYmRJT1lxNlQ2cW5jY2ZsNjZ3WmRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5YzNiYTA4LTZhMmQtNGE3YS05ODA4LTAzYTNjODQwODZhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAxODYsXG4gICAgICAxNzUsXG4gICAgICAxNTcsXG4gICAgICAxMDYsXG4gICAgICAxOTksXG4gICAgICAxNzYsXG4gICAgICAxNixcbiAgICAgIDI0MCxcbiAgICAgIDE1OCxcbiAgICAgIDE0NixcbiAgICAgIDEzNyxcbiAgICAgIDE3MSxcbiAgICAgIDQ2LFxuICAgICAgMjAxLFxuICAgICAgNzUsXG4gICAgICAyMjYsXG4gICAgICAxNTUsXG4gICAgICAzNyxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDYzLFxuICAgICAgMjQyLFxuICAgICAgOCxcbiAgICAgIDE2MixcbiAgICAgIDE4MixcbiAgICAgIDIyOCxcbiAgICAgIDE5LFxuICAgICAgMjIxLFxuICAgICAgMjU0LFxuICAgICAgMjAyLFxuICAgICAgMTI0LFxuICAgICAgMTE5LFxuICAgICAgMTA2LFxuICAgICAgMTIsXG4gICAgICAxMTQsXG4gICAgICAxODQsXG4gICAgICAxMTIsXG4gICAgICAyMzUsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUxLRko2UjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY2MDU0ODUyOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDEzNjU4MDgzNjk3MTE6MjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwia2F2ZWVzaGFyYXNobWlrYXJhc2htaWthNVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05YcHk3d0ZFTTZDaXJVR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicElsRUtIajB5Z1ZkKzFpMmlubWx2OU16NGFHS2NNSnhtbDZSdXNxdGRCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpazVrWVpqZU1FM29tcWZHMnI0cGpNM1VSWC9pMmRwTGdrR3NYTnhVTWVkM280MFY1OHFRM21uMG9Xemg5clBjT0RZWlBxbTM4elNhU0ZlSjZkbHVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVRStudHRBZVQzZXdEaXcvYy94cXp5SldxNW95bXNKQVpvbWNiRFN6Y3pWT3V4MXBrU2RqOEtVR1NDTnBVUmNIbXFVTk10c3BQcStlTEw0MThrQXNCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NjA1NDg1MjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkyNTk3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURUVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFRVLmpzb24iOiAie1wia2V5RGF0YVwiOlwic1UwT1FUQmkrVFY0ZHZFV05SNGJNWnZGdUlHQnZYQklrMGxNcXhOUEM1ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDY5MjQ4NzI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
