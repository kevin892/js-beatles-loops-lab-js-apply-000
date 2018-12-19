// add solution here
function theBeatlesPlay(musicians, instruments) {
  let emArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };

return emArray;
};

function johnLennonFacts(facts) {
  let results = [];
  let j = 0;
  while (j < facts.length) {
    results.push(`${facts[j]}!!!`);
    j++;
  }
  return results;
}
