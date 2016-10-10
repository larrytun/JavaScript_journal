var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $("#journalForm").submit(function(event) {
    event.preventDefault();
    var title = $("#titleInput").val();
    var body = $("#bodyInput").val();
    var entry = new Entry(title, body);
    var numberOfWords = entry.getWords(body);
    var numberOfVowels = entry.getVowels(body);
    var numberOfConsonants = entry.getConsonants(body);
    var teaser = entry.getTeaser(body);
    $("#teaser").text(teaser);
    $("#totalWords").text("The total number of words is " + numberOfWords);
    $("#totalVowels").text("The total number of vowels is " + numberOfVowels);
    $("#totalConsonants").text("The total number of consonants is " + numberOfConsonants);
  });
});
