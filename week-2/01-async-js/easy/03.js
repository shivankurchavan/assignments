const fs = require('fs');

fs.readFile('data.txt','utf-8', (err,data) => {
    if(err) {
        console.err(err);
    }
    console.log(data)
})

 // Simulate an expensive operation with a loop
 console.log(`Performing expensive operation with delay: 3000 ms...`);
 const start = Date.now();
 
 while (Date.now() - start < 3000) {
   // Busy-wait loop simulating a heavy computation
 }