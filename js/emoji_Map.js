var activeEmojis = [];
var dashID = "emoji-dashboard";
var totalOccurrences;
var sizeOfContainer;

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
// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function createEmojiDiv(emojiData) {
  var emojiDiv = document.createElement('div');
  emojiDiv.setAttribute('class','emoji-container');

  // Add the emoji image element as a child
  emojiDiv.appendChild(createEmojiImage(emojidData));

  // Keep track of emojis being displayed
  activeEmojis.push(emojiData.emojiName);

  return emojiDiv;
};

// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function createEmojiImage(emojiData) {
  // Assume file path is img/emojiName
  var img = document.createElement('img');
  img.setAttribute('id', emojiData.emojiName);
  img.setAttribute('src', 'emoji_resources/' + emojiData.emojiName + '.svg');

  var size = sizeOfContainer * emojiData.occurrences / totalOccurrences;
  img.style.height = size;
  img.style.width = size;

  return img;
};

// Make the emoji dashboard with a banner at top (and bottom?)
function createDashboard() {
  // Could maybe make a call to refresh?
  // get data from database
  var dashboard = document.getElementById(dashID);
  var data = JSON.parse(pullEmojiData());

  totalOccurrences = data.totalCount;
  sizeOfContainer = Math.min(dashboard.style.height, dashboard.style.width);
  
  // Populate dashboard with emoji divs (could maybe place them in a table later)
  var numEmojis = data.emojis.length;
  for (var i = 0; i < numEmojis; ++i) {
    console.log(data.emojis[i].emojiName);
    dashboard.appendChild(createEmojiDiv(data.emojis[i]));
  }
};

/*
--------------------------------------------------------------------------------
Dashboard functions
--------------------------------------------------------------------------------
*/

// Updates the sizes of emojis on screen
// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function reorder(data) {
  // Reorder emojis on screen and play a notification noise when emoji resized

  // In future could add function to allow emojis to float
};

// Function to refresh data pulled from database
// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function refresh() {
  var data = pullEmojiData();

  reorder(data);
};


/*
--------------------------------------------------------------------------------
Database interactivity functions
--------------------------------------------------------------------------------
*/
function pullEmojiData() {
  // *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
  // Access database and pull information

  // Return data
  return dummyData;
};

// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function playSound(filename) {
  document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg" /><source src="' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3" /></audio>';
};

window.onload = function() { createDashboard(); };

/*
--------------------------------------------------------------------------------
Functions and data for testing
--------------------------------------------------------------------------------
*/
var dummyData = '{' + '"emojis": [{ "emojiName": "happy", "occurrences": 100 }, { "emojiName": "angry", "occurrences": 100 }]' + '}';
