let tile = document.getElementsByClassName("tile");

let tiles = [...tile];

const alltiles = document.getElementById("gameboard");

let matchedTile = document.getElementsByClassName("match");

let modal = document.getElementById("youwin")

var openedTiles = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

document.body.onload = startGame();

function startGame(){
 
    openedTiles = [];

    tiles = shuffle(tiles);

    for (var i = 0; i < tiles.length; i++){
        alltiles.innerHTML = "";
        [].forEach.call(tiles, function(item) {
            alltiles.appendChild(item);
        });
        tiles[i].classList.remove("show", "open", "match", "disabled");
    }
}

var displayTile = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

function tileOpen() {
    openedTiles.push(this);
    var len = openedTiles.length;
    if(len === 2){
        
        if(openedTiles[0].type === openedTiles[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

function matched(){
    openedTiles[0].classList.add("match", "disabled");
    openedTiles[1].classList.add("match", "disabled");
    openedTiles[0].classList.remove("show", "open", "no-event");
    openedTiles[1].classList.remove("show", "open", "no-event");
    openedTiles = [];
}

function unmatched(){
    openedTiles[0].classList.add("unmatched");
    openedTiles[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedTiles[0].classList.remove("show", "open", "no-event","unmatched");
        openedTiles[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedTiles = [];
    },1100);
}

function disable(){
    Array.prototype.filter.call(tiles, function(tile){
        tile.classList.add('disabled');
    });
}

function enable(){
    Array.prototype.filter.call(tiles, function(tile){
        tile.classList.remove('disabled');
        for(var i = 0; i < matchedTile.length; i++){
            matchedTile[i].classList.add("disabled");
        }
    });
}

function gameover(){
    if (matchedTile.length == 16){
    
        modal.classList.add("show");

    };
}

function playAgain(){
    modal.classList.remove("show");
    startGame();
}

for (var i = 0; i < tiles.length; i++){
    tile = tiles[i];
    tile.addEventListener("click", displayTile);
    tile.addEventListener("click", tileOpen);
    tile.addEventListener("click", gameover);
};

     var audio1 = new Audio('/assets/audio/unison.mp3');
     function audio_unison() {
             audio1.play();
}

     var audio2 = new Audio('/assets/audio/second.mp3');
     function audio_second() {
             audio2.play();
} 

     var audio3 = new Audio('/assets/audio/third.mp3');
     function audio_third() {
             audio3.play();
} 

     var audio4 = new Audio('/assets/audio/fourth.mp3');
     function audio_fourth() {
             audio4.play();
} 

     var audio5 = new Audio('/assets/audio/fifth.mp3');
     function audio_fifth() {
             audio5.play();
} 

     var audio6 = new Audio('/assets/audio/sixth.mp3');
     function audio_sixth() {
             audio6.play();
} 

     var audio7 = new Audio('/assets/audio/seventh.mp3');
     function audio_seventh() {
             audio7.play();
} 

     var audio8 = new Audio('/assets/audio/octave.mp3');
     function audio_octave() {
             audio8.play();
} 