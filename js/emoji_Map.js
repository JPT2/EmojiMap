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
  //console.log(emojiData);
  var emojiDiv = document.createElement('div');
  emojiDiv.setAttribute('class','emoji-container');
  emojiDiv.style.position = 'absolute';

  // Add the emoji image element as a child
  emojiDiv.appendChild(createEmojiImage(emojiData));

  // Keep track of emojis being displayed
  activeEmojis.push(emojiData.emojiName);

  return emojiDiv;
};

// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function createEmojiImage(emojiData) {
  // Assume file path is img/emojiName
  //console.log(emojiData);
  var img = document.createElement('img');
  img.setAttribute('id', emojiData.emojiName);
  img.setAttribute('src', 'emoji_resources/' + emojiData.emojiName + '.svg');

  //ANTONIO IS DOING CHANGES AND STUFF HERE
  var dashboard = document.getElementById(dashID);
  var maxSideLength = Math.min(dashboard.clientHeight / 4, dashboard.clientWidth / 7);

  var size = (maxSideLength * 2 / 3 * emojiData.occurrences / totalOccurrences) + (maxSideLength * 1 / 3);
  //console.log("size: " + size);
  img.style.height = size + "px";
  img.style.width = size + "px";

  return img;
};

// Make the emoji dashboard with a banner at top (and bottom?)
function createDashboard() {
  // Could maybe make a call to refresh?
  // get data from database
  var dashboard = document.getElementById(dashID);
  var data = JSON.parse(pullEmojiData());

  //console.log("total count: " + data.totalOccurrences);
  totalOccurrences = parseInt(data.totalOccurrences);
  sizeOfContainer = Math.min(dashboard.clientHeight, dashboard.clientWidth);

  // Populate dashboard with emoji divs (could maybe place them in a table later)
  var numEmojis = data.emojis.length;
  for (var i = 0; i < numEmojis; ++i) {
    ////console.log(data.emojis[i].emojiName);
    dashboard.appendChild(createEmojiDiv(data.emojis[i]));
  }

  setTimeout(refresh, 5000);
  //console.log(activeEmojis);
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
  activeEmojis.sort(function(a,b) {
    //console.log("sorting")
    var a1 = parseInt(document.getElementById(a).style.width.substring(0,  document.getElementById(a).style.width.length - 2));
    var b1 = parseInt(document.getElementById(b).style.width.substring(0, document.getElementById(b).style.width.length - 2));
    //console.log('a1: ' + a1 + ', b1: ' + b1);
    //console.log(a1 > b1 ? -1 : a1 < b1 ? 1 : 0)
    return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
  });
  activeEmojis.reverse();

  var length = activeEmojis.length;

  //console.log('ANTONIO ARRAY: ' + activeEmojis);
  //console.log(data);
  //console.log('ActiveEmojis: ' + activeEmojis);
  for (var i = 0; i < length; ++i) {
    placeEmoji(activeEmojis[i], i);
  }

  // In future could add function to allow emojis to float
};

// Places an emoji on the display area
function placeEmoji(emojiName, index) {
  var dashboard = document.getElementById(dashID);
  var maxSideLength = Math.min(dashboard.clientHeight / 4, dashboard.clientWidth / 7);
  var topOfDashboard = document.getElementById(dashID).getBoundingClientRect().top - 25;
  var leftSideOffset = Math.max(0, (dashboard.clientWidth - dashboard.clientHeight) / 7);

  //console.log('trying to place index:' + index);
  //console.log('Index: ' + index);
  switch(index) {
    case 0:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 3 + 'px';
      break;
    case 1:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 4 + 'px';
      break;
    case 2:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 2 + 'px';
      break;
    case 3:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 0 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 3 + 'px';
      break;
    case 4:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 2 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 3 + 'px';
      break;
    case 5:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 0 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 2 + 'px';
      break;
    case 6:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 0 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 4 + 'px';
      break;
    case 7:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 2 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 2 + 'px';
      break;
    case 8:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 4 + 'px';
      break;
    case 9:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 0 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 1 + 'px';
      break;
    case 10:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 0 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 5 + 'px';
      break;
    case 11:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 1 + 'px';
      break;
    case 12:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 5 + 'px';
      break;
    case 13:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 2 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 1 + 'px';
      break;
    case 14:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 2 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 5 + 'px';
      break;
    case 15:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 3 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 3 + 'px';
      break;
    case 16:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 3 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 2 + 'px';
      break;
    case 17:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 3 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 4 + 'px';
      break;
    case 18:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 3 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 1 + 'px';
      break;
    case 19:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 3 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 5 + 'px';
      break;
    case 20:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 3 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 0 + 'px';
      break;
    case 21:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 3 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 6 + 'px';
      break;
    case 22:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 2 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 0 + 'px';
      break;
    case 23:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 2 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 6 + 'px';
      break;
    case 24:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 0 + 'px';
      break;
    case 25:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 1 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 6 + 'px';
      break;
    case 26:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 0 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 0 + 'px';
      break;
    case 27:
            document.getElementById(emojiName).parentNode.style.top = topOfDashboard + maxSideLength * 0 + 'px';
            document.getElementById(emojiName).parentNode.style.left = leftSideOffset + maxSideLength * 6 + 'px';
      break;

  }

};

function resize(data) {
  // Resize all elements and notify when changes occur
  console.log(data);
  var numEmojis = data.emojis.length;

  var dashboard = document.getElementById(dashID);
  sizeOfContainer = Math.min(dashboard.clientHeight, dashboard.clientWidth);
  totalOccurrences = data.totalOccurrences;

  // Loop through all elements passed from database
  var oldEmojis = activeEmojis;
  //console.log('^ Data, activeEmojis v');
  //console.log(activeEmojis);
  activeEmojis = [];
  for (var i = 0; i < numEmojis; ++i) {
    var element = document.getElementById(data.emojis[i].emojiName);
    if ( element !== null) {
      //ANTONIO IS DOING CHANGES AND STUFF HERE
      var dashboard = document.getElementById(dashID);
      var maxSideLength = Math.min(dashboard.clientHeight / 4, dashboard.clientWidth / 7);
      var size = (maxSideLength * 2 / 3 * data.emojis[i].occurrences / totalOccurrences) + (maxSideLength * 1 / 3); //Might need to redefine the globals?

      // Check if element has changed size between iterations
      // If they havent changed size then they don't need to be adjusted
      if (Math.round(size) !== element.width) {
        notify(data.emojis[i], size, element.size);
        //console.log("---------------------------------------------");
        //console.log('Changing size of: ' + data.emojis[i].emojiName);
        //console.log(size + ", " + element.width);

        element.style.width = size + 'px';
        element.style.height = size + 'px';

        //console.log(size + ", " + element.width);
        //console.log("---------------------------------------------");

        activeEmojis.push(element.getAttribute('id'));
      }
      oldEmojis.splice(oldEmojis.indexOf(data.emojis[i].emojiName), 1);
    } else {
      // Add a new element to the document
      emojiDiv = createEmojiDiv(data.emojis[i]);
      dashboard.appendChild(emojiDiv);
      notify(data.emojis[i], emojiDiv.style.height, 0);
    }
  }

  console.log('At end of resize: active emojis below');
  console.log(activeEmojis);

  // clear old elements
  var oldLength = oldEmojis.length;
  console.log('Deleting: ' + oldLength);
  for (var i = 0; i < oldLength; ++i) {
    var element = document.getElementById(oldEmojis[i]);
    console.log('clearing: ' + oldEmojis[i]);

    // Need to remove image and div
    element.parentNode.parentNode.removeChild(element.parentNode);
  }
};

function notify(emojiData, newSize, oldSize) {
  //Make some noise and play an animation
};

// Function to refresh data pulled from database
// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function refresh(jsonPackage) {
  //console.log("You're about to fuck up");
  //var data = JSON.parse(pullEmojiData());
  var data = JSON.parse(jsonPackage);
  
  resize(data);
  reorder(data);
  //setTimeout(refresh, 5000);
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
  // if (dummyCounter >= 2) {
  //   dummyCounter = 0;
  // } else {
  //   ++dummyCounter;
  // }
  // return dummyDataSet[dummyCounter];

};

// *** NO ERROR HANDLING CURRENTLY IMPLEMENTED
function playSound(filename) {
  document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg" /><source src="' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3" /></audio>';
};

window.onload = function() { refresh(); };

window.onresize = function(event) {}; //refresh(); };

/*
--------------------------------------------------------------------------------
Functions and data for testing
--------------------------------------------------------------------------------
*/
var dummyCounter = 0;
var dummyData = '{ "totalOccurrences": 1360, ' + '"emojis": [{ "emojiName": "happy", "occurrences": 390 }, { "emojiName": "angry", "occurrences": 100 }, { "emojiName": "ahhh", "occurrences": 70 }, { "emojiName": "crying", "occurrences": 100 }, { "emojiName": "ded", "occurrences": 100 }, { "emojiName": "ehh", "occurrences": 100 }, { "emojiName": "embarassed", "occurrences": 100 }, { "emojiName": "glasses", "occurrences": 100 }, { "emojiName": "halo", "occurrences": 100 }, { "emojiName": "kiss", "occurrences": 100 }, { "emojiName": "happyblush", "occurrences": 100 }]' + '}';
var dummyData2 = '{ "totalOccurrences": 395, ' + '"emojis": [{ "emojiName": "happy", "occurrences": 195 }, { "emojiName": "angry", "occurrences": 100 }]' + '}';
var dummyData3 = '{ "totalOccurrences": 200, ' + '"emojis": [{ "emojiName": "happy", "occurrences": 200 }]' + '}';
var dummyDataSet = [dummyData, dummyData2, dummyData3];
