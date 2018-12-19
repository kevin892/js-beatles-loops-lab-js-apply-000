// add solution here
function theBeatlesPlay(musicians, instruments) {
  let emArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };

return emArray;
};

function johnLennonFacts(fact) {
  let lennonArray = [];
  let j = 0;
  while (j < fact.length) {
    lennonArray.push(`${fact[j]}!!!`);
    j++;
  };
  return lennonArray;
};

function iLoveTheBeatles(num){
  let loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    num++;

  } while (num < 15);

  return loveArray;
};
