function theBeatlesPlay(musicians, instruments) {
  var strings = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var statement = musician + "plays " + instrument;
    strings.push(statement);
  }

  return strings;
}

function johnLennonFacts(facts) {
  var exclaimed = [];
  var i = 0;

  while (i < facts.length) {
    var fact = facts[i];
    exclaimed.push(fact + "!!!");
  }

  return exclaimed;
}