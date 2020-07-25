<h1>MUSIC INTERVALS MEMORY MATCH</h1>
A basic memory game with an added audio feature.

The main purpose of this game to help young music students have fun while learning music intervals. The game consists of 16 tiles, which are 8 sets of matching pairs. It's a version of the popular game 'Concentration'. At the beginning of the game all of the tiles are blanked out. Two tiles are flipped over on each turn. The object of the game is to turn over pairs of matching tiles. In this version of the game the tiles are named after a music interval (Unison, Major 2nd, Major 3rd etc.) and when clicked, will also play that music interval as a learning mechanism.

Over the course of the game, it becomes known where certain tiles are located, and so upon turning up one tile, players with good memory will be able to remember where they have already seen its pair. The player aims to match all the pairs in as little moves as possible.

Once they finsih the game, they get an option to play again.

<h1>UX</h1>
<b>The ideal client for this game is;</b>

* Young music student.
* Music teacher.

<b>Users of this game are;</b>

* Looking for a fun way to learn about music intervals.
* Looking for help teaching music intervals.

<b>This game is;</b>

* Easy to understand.
* Easy to play.
* Quick to play.
* Educational.
* Fun.
* Fast loading.
* Minimalist.

<b>Client Stories:</b>

* When I play this game I want to have fun.
* When I play this game I want to learn music intervals.
* When I play this game I want to be challenged.
* When I play this game I want to be able to try again.
* When I encourage a student to play this game I want them to understand it quickly.
* When I encourage a student to play this game I want them to hear music intervals.
* When I encourage. astudent to play this game I want them to have fun.

<h1>FEATURES</h1>
The game has a minimalist design, optimized for tablets and phones. It features a short title, concise directions on how to play, a move counter, the gameboard and a reset button.

The game starts on page load. All tile positions are shuffled using a Math.random() function. All tiles are .png images. When the game starts they are all given a black background to make the titles disappear. Once the player clicks a tile the background colour changes and the title becomes visible. A short audio clip will also play each time the player clicks a tile, which is the music interval that corresponds to the title (Perfect 4th, Perfect 5th etc.).

The move counter increases by one every two-clicks of tiles, as this counts as one 'turn'.

When a second tile is clicked on a turn, its type is checked against the first tile and if they match, they stay shown and become inactive. If they don't match they revert to being invisible and stay active.

When all matches have been made (and all tiles are fully visible) the game has been won and a modal appears, giving the option to play the game again.

Clicking 'play again' refreshes the page and starts a new game. The 'reset' button underneath the gameboard does the same function and can be pressed at any point.

<h1>TECHNOLOGIES USED</h1>

* HTML
* CSS
* JavaScript
* Bootstrap
* Jasmine
* GitHub
* GitPod
* Google Fonts

<h1>TESTING</h1>

* Site was tested on Chrome, Safari, Edge, Mozilla & Firefox.
* Site was tested on various screens / sizes including desktop, laptop, iPhone & iPad.
* 