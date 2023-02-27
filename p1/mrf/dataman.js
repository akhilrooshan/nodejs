const data=require('../json/campaign.json')
const campaign=data.data
const fs=require('node:fs')
const writablefilestream=fs.createWriteStream("./hem.json")
writablefilestream.write(JSON.stringify(data));
