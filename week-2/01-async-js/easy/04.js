const fs = require('fs');

fs.writeFile('data.txt', 'hello world 2', 'utf8' ,(err) => {
    if (err){
        console.error(err);
    }
    console.log('file written');
})