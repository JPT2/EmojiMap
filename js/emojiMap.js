var activeEmojis[];

/*
--------------------------------------------------------------------------------
Emoji Map.js
--------------------------------------------------------------------------------
Author: J. Patrick Taggart
================================================================================
*/

/*
--------------------------------------------------------------------------------
Emoji Creation Functions
--------------------------------------------------------------------------------
*/

// Create a div to contain elements related to a particular emoji
function createEmojiDiv(emojiName) {
  var emojiDiv = document.createElement('div');
  emojiDiv.setAttribute('id', emojiName + '-container');

  // Add the emoji image element as a child
  emojiDiv.appendChild(createEmojiImage(emojiName));

  // Keep track of emojis being displayed
  activeEmojis.push(emojiName);
};

function createEmojiImage(emojiName) {
  // Assume file path is img/emojiName
  var img = document.createElement('img');
  img.setAttribute('id', emojiName);
  img.setAttribute('src', emojiName + '.svg');
};

/*
--------------------------------------------------------------------------------
Dashboard functions
--------------------------------------------------------------------------------
*/
function reorder() {
  
};

function refresh() {

};


/*
--------------------------------------------------------------------------------
Database interactivity functions
--------------------------------------------------------------------------------
*/
function pullEmojiData() {
  // Access database and pull information

  // Return data
};

function playSound(filename) {
  document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg" /><source src="' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3" /></audio>';
};
