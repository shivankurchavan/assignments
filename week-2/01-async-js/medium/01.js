const fs = require('fs');

fs.readFile('data.txt','utf-8', (err,data) => {
    if (err){
        console.log(err);
    }

    console.log(data);

    const newFile = data.replace(/\s+/g , ' ' ).trim();

    fs.writeFile('data.txt', newFile, 'utf-8', (err) => {   
        if(err){
            console.error(err);
        }
        console.log('file written');

    })
})


