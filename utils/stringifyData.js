const fs = require('fs');

const data = function(pathFile) {  
  const content = fs.readFileSync(pathFile, 'utf-8', (err, data) => {
    if (err) throw err;
  });
  
  return content;
};
module.exports = data