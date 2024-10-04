let counter = 0;

function count(){
  counter += 1 ;
  console.log(counter);
}

setInterval(count, 1000);