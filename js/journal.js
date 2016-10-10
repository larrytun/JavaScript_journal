function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.getWords = function(body) {
  var bodyWords = body.split(" ");
  var bodyWordsSize = bodyWords.length;
  return bodyWordsSize;
};

Entry.prototype.getVowels = function (body) {
  var bodyLetters = body.split("");
  console.log(bodyLetters);
  var vowels = ["a", "e", "i", "o", "u"];
  var counter = 0;
  for (i = 0; i < bodyLetters.length; i++){
    for (j = 0; j < vowels.length; j++){
      if (bodyLetters[i] == vowels[j]){
        counter++;
      }
    }
  }
  return counter;
};

Entry.prototype.getConsonants = function (body) {
  var bodyLetters = body.split("");
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var counter = 0;
  for (i = 0; i < bodyLetters.length; i++){
    for (j = 0; j < consonants.length; j++){
      if (bodyLetters[i] == consonants[j]){
        counter ++;
      }
    }
  }
  return counter;
};

Entry.prototype.getTeaser = function (body) {
  var bodyWords = body.split(" ");
  var firstEight = [];
  for (i = 0; i < 8; i++) {
    firstEight.push(bodyWords[i]);
  }
  firstEight.join();
  return firstEight;
};

exports.entryModule = Entry;
