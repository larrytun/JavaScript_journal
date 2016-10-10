(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
