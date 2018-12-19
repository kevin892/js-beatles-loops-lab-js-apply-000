// add solution here
function theBeatlesPlay(musicians, instruments) {
  let emArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };

return emArray;
};

function johnLennonFacts(facts) {
  let lennonArray = [];
  let j = 0;
  while (j < facts.length) {
    lennonArray.push(`${facts[j]}!!!`);
    j++;
  }
  return lennonArray;
}
