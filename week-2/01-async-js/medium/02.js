function count(){
    console.clear();

    const currentTime = new Date().toLocaleTimeString();

    console.log('cureent time is: ', currentTime);
}
      
setInterval(count, 1000);