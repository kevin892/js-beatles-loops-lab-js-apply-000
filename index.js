// add solution here
function theBeatlesPlay(musicians, instruments) {
  let emArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emArray.push(musicians[i] + "plays" + instruments[i]);
  };

return emArray;  
};