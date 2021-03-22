// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //btwn 0.0 and 1.0
var guessCounter = 0;
var strikeCounter = 0;
var clueHoldTime = 1000;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  strikeCounter = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("heart1").classList.remove("hidden");
  document.getElementById("heart2").classList.remove("hidden");
  document.getElementById("heart3").classList.remove("hidden");
  generatePattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  pattern.length = 0;
  strikeCounter = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("heart1").classList.add("hidden");
  document.getElementById("heart2").classList.add("hidden");
  document.getElementById("heart3").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 604,
  3: 397,
  4: 466.7,
  5: 535.4,
  6: 329.6
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//play a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  console.log("Clue hold time " + clueHoldTime)
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 20;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("You won! You're a star!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if (pattern[guessCounter] != btn) { //incorrect guess
    strikeCounter++;
    console.log("Strikes: " + strikeCounter)
    document.getElementById("heart"+strikeCounter).classList.add("hidden");
    
    if (strikeCounter == 3) { //3 strikes=>lose game
      loseGame();
    }
    
    else { //replays sequence
      alert("Oops...wrong guess. Let us refresh your memory and try again!");
      clueHoldTime += guessCounter * 10;
      playClueSequence();
    }
  }
  else { //guessed correctly so game keeps going
    if (guessCounter == progress) { //turn is over
      if (progress == (pattern.length - 1)) { 
        //last turn->reached end of pattern
        winGame();
      }
      //not last turn
      else { 
        progress++;
        playClueSequence();
      }
    }
    else { //turn not over
      guessCounter++;
    }
  }
}

function generatePattern(){
  var x = 0;
  var max = 6;
  var min = 1;
  for (var i = 0; i < 8; i++) {
    x = Math.floor(Math.random() * (max - min + 1) + min);
    pattern.push(x);
  }
  console.log(pattern.length);
}

