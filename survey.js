const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const qaObject = {
  1 : { q : 'What\'s your name? Nicknames are also acceptable :)',
        a : ''
  },
  2 : { q : 'What\'s an activity you like doing?',
        a : ''
  },
  3 : { q : 'What do you listen to while doing that?',
        a : ''
  },
  4 : { q : 'Which meal is your favourite (eg: dinner, brunch, etc.)',
        a : ''
  },    
  5 : { q : 'What\'s your favourite thing to eat for that meal?',
        a : ''
  },
  6 : { q : 'Which sport is your absolute favourite?',
        a : ''
  },    
  7 : { q : 'What is your superpower? In a few words, tell us what you are amazing at!',
        a : ''
  },    
}

const question = function(obj, num){

  let qaObj = obj;
  if (!num) num = 1;

  let currQustnNum = num;

  const totQustnNum = Object.keys(qaObj).length;

  rl.question(qaObj[currQustnNum].q + '\r\n', (answer) => {

    qaObj[currQustnNum].a = answer; 

    if (currQustnNum === totQustnNum) {
      printAnswers(qaObj);
      rl.close();

    } else{
      question(qaObj, ++currQustnNum);
    }
  });
};


const printAnswers = function(obj) { 
  console.log('Thank you for your valuable feedback');
  console.log('Your answers are ');

  for (let objKey in obj) {
    console.log(`Q${objKey}. ${obj[objKey].q}`);
    console.log(`  => ${obj[objKey].a}`);
  }
};


question(qaObject);