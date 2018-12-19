// add solution here
function theBeatlesPlay(musicians, instruments) {
  let emArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };

return emArray;
};

function johnLennonFacts() {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  let lennonArray = [];
  let i = 0;
  while (lennonArray.length < facts.length) {
    lennonArray.push(`${facts[i]}!!!);
    i++;
  }
  return lennonArray;
}
