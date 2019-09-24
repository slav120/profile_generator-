const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? Nicknames are also acceptable.', (a1) => {  
  rl.question('What is an activity you like doing ?', (a2) => {
    rl.question('What do you listen to while doing that ?', (a3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.', (a4) => {
        rl.question('What is your favourite thing to eat for that meal ?', (a5) => {
          rl.question('Which sport is your absolute favourite ?', (a6) => {
            rl.question('What is your superpower ? In a few words, tell us what you are amazing at !', (a7) => {
   
  
  
  
  
  
  console.log(`Thank you for your valuable feedback: ${a1} We now know everything about you ! From your favorite sport, ${a6}
To your favorite meal, of the day, ${a4} ! We shall now update our detabasses with the newest info you kindly provided to us ! We hope you have an amazing day`) ;
  
  rl.close();

});
});
});
});
});
});
});

