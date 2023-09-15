const fs = require("fs");

const createTime = () => {
  const info = new Date();
  const sendDate = `Date : ${info.getDate()} / ${
    info.getMonth() + 1
  } / ${info.getFullYear()} \n
   Time : ${info.getHours()} : ${info.getMinutes()} : ${info.getSeconds()}`;
  const pathName = info
    .toISOString()
    .replace(/[-T:.]/g, "_")
    .slice(0, -5); // Format: YYYY-MM-DDTHH_MM_SS
  // fs.mkdirSync('./API')  //To Create Folder In Root Folder  ---> API
  fs.writeFileSync(`./API_KEY/${pathName}.txt`, pathName); //Create file and addind inside API
  return sendDate;
};
module.exports = { createTime };
