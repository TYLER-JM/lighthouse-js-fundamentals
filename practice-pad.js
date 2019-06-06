//this function returns a new array based on the arguments given (3 numbers)
function range(start, end, step) {
  var finalArray = [];

  if (step < 0) {
    return finalArray;
  }


  for (start; start <= end; start += step) {
    finalArray.push(start);

  }

  return finalArray;
}

//this function returns the last index where a value (2nd argument)
//can be found in a given array (1st argument), otherwise return -1
function lastIndexOf(testArray, value) {
  for (var i = testArray.length - 1; i >= 0; i--) {
    if (value === testArray[i]) {
      return i;
    }
  }
  return -1;
}

//this function prints numbers 100-200
//but replaces numbers divisible by 3, 4, or both with strings
function printNumbers() {

  for (var i = 100; i <= 200; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("LoopyLighthouse");
    } else if (i % 4 === 0) {
      console.log("Lighthouse");
    } else if (i % 3 === 0) {
      console.log("Loopy");
    } else {
      console.log(i);
    }
  }
}

//prints numbers in a given range (an array with two values, 1st arg)
//replaces numbers divisible by one or both of the numbers given as the 2nd arg (array)
//with one or the other or both of the words given as part of the 3rd arg (array)
function loopyLighthouse(range, multiples, words) {

  for (var i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
  return "DONE";
}

//this function finds the two largest numbers
//in an array (1st argument) and returns their sum
function sumLargestNumbers(array) {
  array.sort((a, b) => b - a);
  var sumTotal = array[0] + array[1];
  return sumTotal;
}

//same? doesn't work
function getSum(arrayIn) {
  var penultimate = 0;
  var ultimate = 0;
  for (var i = 0; i < arrayIn.length; i++) {
    if (arrayIn[i] < arrayIn[i+1]) {
      ultimate = arrayIn[i+1];
      penultimate = arrayIn[i];
    }
  }
  return penultimate + ultimate;
}
//console.log(getSum([1,7,3,4,5]));

function conditionalSum(arr, condition) {
  var sum = 0;
  if (condition == "even") {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  } else if (condition == "odd") {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] % 2 !== 0) {
        sum += arr[j];
      }
    }
    return sum;
  } else {
    return sum;
  }
}

//returns the number of vowels
function numberOfVowels(stringIn) {
  var regex = /a|e|i|o|u/g;
  var totalVowels = stringIn.match(regex);
  return totalVowels.length;
}

//
function instructorWithLongestName(arrOfObjects) {
  var longestName = arrOfObjects[0];
  for (var i = 1; i < arrOfObjects.length; i++) {
    if (arrOfObjects[i].name.length > longestName.name.length) {
      longestName = arrOfObjects[i];
    }
  }
  return longestName;
}

//url encodes string by turning " " into "%20"
function urlEncode(text) {
  text = text.trim();
  var encodedText = "";

  for (var i = 0; i < text.length; i ++) {
    if (text[i] === " ") {
      encodedText += "%20";
    } else {
      encodedText += text[i];
    }
  }
  return encodedText;
}

//takes a 2d array, and spits numbers
function repeatNumbers(multiArray) {
  var finalOutput = "";

  for (var i = 0; i < multiArray.length; i++){

    for (var j = 0; j < multiArray[i][1]; j++) {
      finalOutput += multiArray[i][0];
    }
    if (i < multiArray.length - 1) {
      finalOutput += ", ";
    }
  }
  return finalOutput;
}

//convert a string to camalCase
function camelCase(inputString) {
  inputString = inputString.trim();
  var camelCased = "";

  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
      camelCased += "";
      i++;
      camelCased += inputString[i].toUpperCase();

    } else {
      camelCased += inputString[i].toLowerCase();

    }
  }
  return camelCased;
}

//print out multiplication tables according to argument
function multiplicationTable(maxValue) {
  for (var i = 1; i <= maxValue; i++) {
    var tableLine = "";

    for (var j = 1; j <= maxValue; j++) {
      tableLine += i*j;
      if (j < maxValue) {
        tableLine += " ";
      }

    }
    console.log(tableLine);
  }
  return "\n";
}

//convert YYYY/MM/DD into "December 3rd, 2019"
function talkingCalendar(dateString) {
  var months = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'];
  var month = "";
  var day = "";
  var year = "";
  var fullDate = "";

  month = parseInt(dateString[5] + dateString[6], 10);
  year = dateString[0] + dateString[1] + dateString[2] + dateString[3];


  fullDate += months[month - 1];

  var dd = parseInt(dateString[8] + dateString[9], 10);
  switch (dd) {
    case 1:
    case 21:
    case 31:
      day = dd + "st";
      break;
    case 2:
    case 22:
      day = dd + "nd";
      break;
    case 3:
    case 23:
      day = dd + "rd";
      break;
    default:
      day = dd + "th";
      break;
  }

  fullDate += " " + day + ", " + year;

  return fullDate;
}

//return object that describes how much change and
//which denominations to by used
function calculateChange(total, cash) {
  var denominations = {
    "twenties" : 0,
    "tens" : 0,
    "fives" : 0,
    "toonies": 0,
    "loonies": 0,
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0
  };
  var change = cash - total;

  while (change > 0) {
    if (change >= 2000) {
    denominations.twenties += 1;
    change -= 2000;
    } else if (change >= 1000) {
      denominations.tens += 1;
      change -= 1000;
    } else if (change >= 500) {
      denominations.fives += 1;
      change -= 500;
    } else if (change >= 200) {
      denominations.toonies += 1;
      change -= 200;
    } else if (change >= 100) {
      denominations.loonies += 1;
      change -= 100;
    } else if (change >= 25) {
      denominations.quarters += 1;
      change -= 25;
    } else if (change >= 10) {
      denominations.dimes += 1;
      change -= 10;
    } else if (change >= 5) {
      denominations.nickels += 1;
      change -= 5;
    } else {
      denominations.pennies += 1;
      change -= 1;
    }
  }

  for (var prop in denominations) {
    if (denominations[prop] === 0) {
      delete denominations[prop];
    }
  }

  return denominations;
}

//convert strings to capitalize the first letter of every word
function titleCase(str) {
  var casedStr = "";
  casedStr += str[0].toUpperCase();
  for (var i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      casedStr += str[i];
      i++
      casedStr += str[i].toUpperCase();
    } else {
      casedStr += str[i].toLowerCase();
    }
  }
  return  casedStr;
}

//create a new array by
//splicing one array into another using Slice() and Splice()
function frankenSplice(arr1, arr2, n) {
  var frankenArray = arr2.slice(0);
  for (var i = 0; i < arr1.length; i++) {
      frankenArray.splice(n+i, 0, arr1[i])
  }
  return frankenArray;
}

//remove all falsey values
function bouncer(arr) {
  let newArr = [];
  for (var i = 0; i <arr.length; i++) {
    var check = Boolean(arr[i]);
    if (check === true) {
      newArr.push(arr[i])
    }
  }
  return newArr;
  //or do it all with
  //return arr.filter(Boolean);
}

//find the index at which to insert the 2nd argument
function getIndexToIns(arr, num) {
  console.log("length of arr: " + arr.length)
  arr = arr.sort((a, b) => a - b);
  var insertPos = 0;
  if (arr.length === 0) return 0;
  for (var i = 0; i <= arr.length; i++) {
    if (num <= arr[i]) {
      return insertPos;
    } else {
      insertPos++;
      if (insertPos === arr.length) {
        return insertPos;
      }
    }
  }

}

//this function takes an array of objects with properties: name, course
//and creates a new object which groups all instructors who teach the same course
  //ADD PROPERTY
  //Object.property = "newProp";
  //obj.hasOwnProperty("property")
  //if ("property" in Object)
function organizeInstructors(instructors) {
  var obj = {};

  for (var i = 0; i < instructors.length; i++) {

    if (instructors[i].course in obj) {
      obj[instructors[i].course].push(instructors[i].name);
    } else {
      obj[instructors[i].course] = [];
      obj[instructors[i].course].push(instructors[i].name);
    }

  }
  return obj;
}


//mutation() takes an array containing two strings and
//returns true if the first string contains all the letters
//of the second string (ignoring case)
    //using indexOf() method
function mutation(arr) {
  var serf = arr[1].toLowerCase();
  var master = arr[0].toLowerCase();
  for (var i = 0; i < serf.length; i++) {
    if (master.indexOf(serf[i]) < 0) return false;
  }
  return true;

  /********••JANKY••**********
  var serf = arr[1].toLowerCase();
  var master = arr[0].toLowerCase();
  var counter = 0;
  var i = 0;
  while (i < serf.length) {
    for (var j = 0; j < master.length; j++) {
      if (serf[i] === master[j]) {

        if (i === serf.length - 1) return true;
        i++;
        j = -1;
        counter = 0;
      } else {

        counter++;
        if (counter === master.length) return false;
      }
    }
  }
  return false;
  ********************/
}

//this function takes an array (1st arg) and turns it into
//a multidimensional array made up of arrays whose
//length is no greater than the number given as the 2nd arg
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var numOf = Math.ceil(arr.length / size);
  var ind = 0;
  for (var i = 0; i < numOf; i++) {
    newArr.push([]);
    for (var j = 0; j < size; j++) {
    if (ind === arr.length) return newArr;
    newArr[i].push(arr[ind]);
    ind++;
    //console.log(newArr);
    }
  }
  return newArr;
}

//this function takes a string (1st arg)
//and alters it's case based on the info given in 2nd arg (KATA 12 LL prep)
function makeCase(input, style) {
  var stringOut = "";
  var firstStyle;
  var secondStyle;
  if (typeof style === "object") {
    firstStyle = style[0];
    secondStyle = style[1];
  } else {
    firstStyle = style;
    secondStyle = false;
  }

  //define function to remove or change spaces
  //according to the character given as 2nd argument
  function changeSpace(str, char) {
    var complete = "";
    for (var i = 0; i < str.length; i++) {
          if (str[i] === " ") {
            complete += char;
          } else {
            complete += str[i];
          }
        }
    return complete;
  }

  //define function to capitalize each word.
  //provide a truthy value as 2nd argument to capitalize the first word
  //otherwise capitalization starts from 2nd word
  function capitalizeWords(str, truthy) {
    var complete = "";
    var i = 0;
    if (truthy) {
      complete += str[0].toUpperCase();
      i++;
    }
    while (i < str.length) {
      if (str[i] === " ") {
          complete += str[i];
          i++;
          complete += str[i].toUpperCase();
          i++;
        } else {
          complete += str[i];
          i++;
        }
    }
    return complete;
  }

  //define a function to capitalize vowels.
  //provide a falsely value to the 2nd argument
  //to capitalize consonants
  function capitalizeVowels(str, truthy = true) {
    var complete = "";
    var regEx = /a|e|i|o|u/;
    var check;
    for (var i = 0; i < str.length; i++) {
      if (truthy) check = regEx.test(str[i]);
      else check = !regEx.test(str[i]);

      if (check) {
        complete += str[i].toUpperCase();
      } else {
        complete += str[i];
      }
    }
    return complete;
  }

  switch (firstStyle) {

    case "camel":
      return changeSpace(capitalizeWords(input), "");

    case "pascal":
      return changeSpace(capitalizeWords(input, true), "");

    case "snake":
      return changeSpace(input, "_");

    case "kebab":
      return changeSpace(input, "-");

    case "title":
      stringOut = capitalizeWords(input, true);
      break;

    case "vowel":
      stringOut = capitalizeVowels(input);
      break;

    case "consonant":
      stringOut = capitalizeVowels(input, false);
      break;

    case "upper":
      stringOut = input.toUpperCase();
      break;

    case "lower":
      stringOut = input.toLowerCase();
      break;

  } //end switch statement

  if (secondStyle === "snake") {
        return changeSpace(stringOut, "_");
      } else if (secondStyle ==="kebab") {
        return changeSpace(stringOut, "-");
      }

  return stringOut;

}
  //console.log(makeCase("how are you today", ["upper", "snake"]));

//this function converts a url (argument) into an object
//i.e "city=Vancouver&weather=lots%20of%20rain"
function urlDecode(text) {
  var objComplete = {};
  var regex = /%20/g;
  var objPairs = text.split("&");
  for (var i = 0; i < objPairs.length; i++) {
    var splitPairs = objPairs[i].split("=");
    if (regex.test(splitPairs[0]) || regex.test(splitPairs[1])) {
      objComplete[splitPairs[0].replace(regex, " ")] = splitPairs[1].replace(regex, " ");
    } else {
      objComplete[splitPairs[0]] = splitPairs[1];
    }
  }
  return objComplete;
}

//this function receives a string and converts it to square code
function squareCode(message) {
  var noSpace = "";
  var coded = "";
  var sqrt = Math.ceil(Math.sqrt(noSpace.length));

  //remove the spaces
  for (var i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      i++;
      noSpace += message[i];
    } else {
      noSpace += message[i];
    }
  }

  //convert to square code
  for (var j = 0; j < sqrt; j++) {
    var ind = j;
    var k = 0;
    while (ind < noSpace.length) {
      coded += noSpace[ind];
      k += sqrt;
      ind = j + k;
    }
    if (j < sqrt - 1) coded += " ";
  }

  return coded;
}

//////KATA 15 from Lighthouse Labs Prep Course//////
/*Includes two functions:
  generateBoard takes two arguments
  that give each give an X and Y coordinate
  to determine the position of the Queens*/
let whiteQueen = [7, 7];
let blackQueen = [7, 6];
function generateBoard(whiteQueen, blackQueen) {
  let [x1, y1] = whiteQueen;
  let [x2, y2] = blackQueen;
  let board = [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
              ];
  board[y1][x1] = 1;
  board[y2][x2] = 1;
  return board;
}

function queenThreat(boardState) {
  let x1 = -1;
  let y1 = 0;
  let x2 = -1;
  let y2 = 0;
  let i = 0;
    //get coordinates of first queen
  while (i < boardState.length) {
    x1 = boardState[i].indexOf(1);
    if (x1 >= 0) break;
    i++;
  }
  y1 = i;

    //check to see if both queens are in the same array
  x2 = boardState[i].lastIndexOf(1);
    //otherwise continue getting coordinates for 2nd queen
  if (x2 === x1) {
    i++;
    x2 = -1;
    while (i < boardState.length) {
      x2 = boardState[i].indexOf(1);
      if (x2 >= 0) break;
      i++;
    }
  }
  y2 = i;

    //search horizontally and vertically
  if (x1 === x2 || y1 === y2) return true;
    //search diagonally from bottom-left to top-right
  if (x1 + y1 === x2 + y2) return true;

  let posX = x1 - 1;
  let posY = y1 - 1;
    //search diagonal up and left
  while (posX >= 0 && posY >= 0) {
    if (boardState[posY][posX] === 1) return true;
    posX--;
    posY--;
  }

  posX = x1 + 1;
  posY = y1 + 1;
    //search diagonal down and right;
  while (posX <= boardState.length-1 && posY <= boardState.length-1) {
    if (boardState[posY][posX] === 1) return true;
    posX++;
    posY++;
  }

  return false;
}
//console.log(generateBoard(whiteQueen, blackQueen));
//console.log(queenThreat(generateBoard(whiteQueen, blackQueen)));
//end of KATA 15//

function blocksAway(directions) {
  var blocksNorth = 0;
  var blocksEast = 0;
  var orientation = "northEast";
  var finalOutput = {
    east: 0,
    north: 0,
  };

  function travelEast(distance) {
    blocksEast += distance;
    orientation = "east";
  }
  function travelSouth(distance) {
    blocksNorth -= distance;
    orientation = "south";
  }
  function travelWest(distance) {
    blocksEast -= distance;
    orientation = "west";
  }
  function travelNorth(distance) {
    blocksNorth += distance;
    orientation = "north";
  }
  for (var i = 0; i < directions.length; i += 2) {
    if (directions[i] === "right") {
      switch (orientation) {
        case "north":
        case "northEast":
          travelEast(directions[i+1]);
          //blocksEast += directions[i+1];
          //orientation = "east";
          break;
        case "east":
          travelSouth(directions[i+1]);
          //blocksNorth -= directions[i+1];
          //orientation = "south";
          break;
        case "south":
          travelWest(directions[i+1]);
          //blocksEast -= directions[i+1];
          //orientation = "west";
          break;
        case "west":
        travelNorth(directions[i+1]);
          //blocksNorth += directions[i+1];
          //orientation = "north";
          break;
      } //end switch
    } else {
        switch (orientation) {
          case "east":
          case "northEast":
            travelNorth(directions[i+1]);
            //blocksNorth += directions[i+1];
            //orientation = "north";
            break;
          case "north":
            travelWest(directions[i+1]);
            //blocksEast -= directions[i+1];
            //orientation = "west";
            break;
          case "west":
          travelSouth(directions[i+1]);
            //blocksNorth -= directions[i+1];
            //orientation = "south";
            break;
          case "south":
            travelSouth(directions[i+1]);
            //blocksEast += directions[i+1];
            //orientation = "east";
            break;
        } //end switch
      } //end else
  } //end for
  finalOutput.east = blocksEast;
  finalOutput.north = blocksNorth;
  return finalOutput;
}
//console.log(blocksAway(["right", 2, "left", 4, "left", 1]));
//console.log(blocksAway(["left", 6, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
//console.log(blocksAway(["left", 3, "right", 0, "right", 3, "right", 1]));