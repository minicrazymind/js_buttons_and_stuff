
//Instance variables that we'll use for later like the buttons and stuff
var halfButton = document.getElementById("half-button");
var fortuneButton = document.getElementById("fortune-button");

var fortunes = ["a red", "an army of penguins", "however,", "lightningbolt strikes", "stumble upon", "lobster", "a broken", "narwhals", "be afraid of", "look out for", "Santa Claus", "fuschia", "at the bank", "spin into", "toilet paper", "time", "a massive heist", "but that's when you'll least expect", "when a roaring flame", "a two for one deal", "and you will be hungry, for", "be wary of", "a restaurant", "small forks", "the meme economy", "giant spoons", "jump off", "dashes towards", "don't get into your car when", "slam into the wall", "crash into a door", "fifty cows", "fly off into the horizon", "through the snow", "when it is 50 degrees outside", "will be frozen by", "three fish", "stowaways might", "twenty sheckles", "look down","run", "a blue", "bread", "ice cubes", "charcoal", "will crash the stock market", "but it will be alright, because", "and that will be when", "an umbrella under the roof", "sardines"];

console.log(fortunes.length);

//Buttons will now trigger functions
halfButton.addEventListener("click", halfNum);
fortuneButton.addEventListener("click", giveFortune);

//Halves the input and logs it to console and alert window
function halfNum(){
  var halfOutput = document.getElementById("half-input").value; //Receives the value from the site
  halfOutput = halfOutput / 2;  //Half the value
  console.log(halfOutput); //Log output to console
  alert(halfOutput); //Show output on alert window
}


//Takes a string input, reads the characters and gives a fortune based on it.
function giveFortune() {
  var fortuneInput = document.getElementById("fortune-input").value; //What we get from the site
  var introString1 = "Your lucky numbers are:"
  var introString2 = "Your fortune is:"

  var fortuneOutput = ""; //Foundation the fortune is created on, final fortune is stored here
  var luckNumOutput = ""; //Numerical outputs are put into here for dank memes
  var finalOutput = ""; //Takes everything together and makes the final prediction


  var nameLength = fortuneInput.length; //gets length of string for my for loop
  // console.log(nameLength);

  //This for loop runs through the string input and for each letter gets the Unicode and references from the array of words and gives a fortune
  for(i = 0; i < nameLength; i++) {
    //Getting random numbers from the word
    var luckyNum = Math.floor(Math.random() * fortuneInput.charCodeAt(i));
    luckyNum = Math.floor(luckyNum/2);

    //Sometimes we get bad numbers, but it's alright
    if(luckyNum > 50) {
      luckyNum = Math.floor(Math.random() * 50);
    }

    //Storing the fortunes
    luckNumOutput = luckNumOutput + luckyNum + ", " ;
    // console.log(luckyNum);
    fortuneOutput = fortuneOutput + " " + fortunes[luckyNum];
  }

  //Putting it all together
  finalOutput = introString1 + " " + luckNumOutput + "\n" + introString2 + " " + fortuneOutput;

  //Discover your fortune now!
  document.getElementById("fortune-output").innerHTML = finalOutput;

  changeCSS();
}




//We change some CSS randomly!
function changeCSS() {
  //find the fortune we wanna mess with
  var fortune = document.getElementById("fortune-output");

  //Random color #1
  var red1 = Math.floor(Math.random() * 255);
  var grn1 = Math.floor(Math.random() * 255);
  var blu1 = Math.floor(Math.random() * 255);

  //Random color #2
  var red2 = Math.floor(Math.random() * 255);
  var grn2 = Math.floor(Math.random() * 255);
  var blu2 = Math.floor(Math.random() * 255);

  //Random fontSize
  var fontSize = Math.floor(Math.random() * 50) + 10;


  //Change color, textShadow, and font size of fortune
  fortune.style.color = "rgb(" +red1+ "," +grn1+ "," +blu1+ ")";
  fortune.style.textShadow = "3px 3px 3px rgb("+red2+","+grn2+","+blu2+")";
  fortune.style.fontSize = fontSize+"px";
}
