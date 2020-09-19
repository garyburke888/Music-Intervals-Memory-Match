// declare tiles and collection of all tiles
let tile = document.getElementsByClassName("tile");
let tiles = [...tile];
const alltiles = document.getElementById("gameboard");

// declare tile matcher variable
let matchedTile = document.getElementsByClassName("match");

// declare move counter
let moves = 0;
let counter = document.querySelector(".moves");

// declare opened tiles array
let openedTiles = [];

// declare modal for end of game
let modal = document.getElementById("youwin");

// declare audio files and play functions
     let audio1 = new Audio('assets/audio/unison.mp3');
     function audio_unison() {
             audio1.play();
             audio1.volume = 0.66;
}
     let audio2 = new Audio('assets/audio/second.mp3');
     function audio_second() {
             audio2.play();
             audio2.volume = 0.66;
} 
     let audio3 = new Audio('assets/audio/third.mp3');
     function audio_third() {
             audio3.play();
             audio3.volume = 0.66;
} 
     let audio4 = new Audio('assets/audio/fourth.mp3');
     function audio_fourth() {
             audio4.play();
             audio4.volume = 0.66;
} 
     let audio5 = new Audio('assets/audio/fifth.mp3');
     function audio_fifth() {
             audio5.play();
             audio5.volume = 0.66;
} 
     let audio6 = new Audio('assets/audio/sixth.mp3');
     function audio_sixth() {
             audio6.play();
             audio6.volume = 0.66;
} 
     let audio7 = new Audio('assets/audio/seventh.mp3');
     function audio_seventh() {
             audio7.play();
             audio7.volume = 0.66;
} 
     let audio8 = new Audio('assets/audio/octave.mp3');
     function audio_octave() {
             audio8.play();
             audio8.volume = 0.66;
} 

    let audio9 = new Audio('assets/audio/match.mp3');
    let audio10 = new Audio('assets/audio/youwin.mp3');

// function to shuffle tiles
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// start game on page load
document.body.onload = startGame();

// game function
function startGame(){

    // set openedTiles array empty
    openedTiles = [];

    // shuffle gameboard
    tiles = shuffle(tiles);

    // loop to remove current classes from tiles
    for (let i = 0; i < tiles.length; i++){
        alltiles.innerHTML = "";
        [].forEach.call(tiles, function(item) {
            alltiles.appendChild(item);
        });
        tiles[i].classList.remove("show", "open", "match", "disabled");
    }

    // set move counter to zero
    moves = 0;
    counter.innerHTML = moves;
}

// swap tile classes from open to shown, or disalbled
var displayTile = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

// function to add tiles to opened tiles array and check if it's a match for previous tile, based on type
function tileOpen() {
    openedTiles.push(this);
    let len = openedTiles.length;
    if(len === 2){
        moveCounter();
        if(openedTiles[0].type === openedTiles[1].type){
            matched();
        } else {
            unmatched();
        }
    }
}

// function if tiles match
function matched(){
    audio9.play();
    openedTiles[0].classList.add("match", "disabled");
    openedTiles[1].classList.add("match", "disabled");
    openedTiles[0].classList.remove("show", "open", "no-event");
    openedTiles[1].classList.remove("show", "open", "no-event");
    openedTiles = [];
}

// function if tiles don't match 
function unmatched(){
    openedTiles[0].classList.add("unmatched");
    openedTiles[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedTiles[0].classList.remove("show", "open", "no-event","unmatched");
        openedTiles[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedTiles = [];
    },1000);
}

// function to disable tiles temporarily
function disable(){
    Array.prototype.filter.call(tiles, function(tile){
        tile.classList.add('disabled');
    });
}

// function to enable tiles but disable matched tiles
function enable(){
    Array.prototype.filter.call(tiles, function(tile){
        tile.classList.remove('disabled');
        for(let i = 0; i < matchedTile.length; i++){
            matchedTile[i].classList.add("disabled");
        }
    });
}

// function to count players moves, once every two clicks
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
}

// function to run on completion of game, when all matches are made
function gameover(){
    if (matchedTile.length == 16){

        // play youwin audio
        audio10.play();

        // show you win modal
        modal.classList.add("show");

        // show how many moves were made
        document.getElementById("finalMove").innerHTML = moves;

    }
}

// function to restart the game
function playAgain(){
    modal.classList.remove("show");
    startGame();
}

// loop for event listeners on tiles
for (let i = 0; i < tiles.length; i++){
    tile = tiles[i];
    tile.addEventListener("click", displayTile);
    tile.addEventListener("click", tileOpen);
    tile.addEventListener("click", gameover);
}

//Function To Display Contact Popup
function div_show() {
document.getElementById('contact').style.display = "block";
}

//Function to Hide Contact Popup
function div_hide(){
document.getElementById('contact').style.display = "none";
}