const fs = require('fs');
const files = fs.readdirSync(__dirname);

files.forEach(element => {
    console.log(element);    
});