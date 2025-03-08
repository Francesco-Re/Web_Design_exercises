//this file will contain the whole lab project, every section separated by comments
"use strict";

//Lab01

//Prerequisits
/*
Required structures:
Meme structure: must contain an image (todo, for now we didn't talk about images yet), the
list of strings of "correct" captions, ordered by descending points (calculation of
points is 3-index). 
    Funtions: Has an internal function that gives the points based on the string
    of the caption given by a string, other then the contruction functions.

Stack of captions: contains the lists of captions and a vector of used cards (the vector
is just a n vector with elements are 0 if the card is used, 1 if not used).
    Functions: It has a function that gives a set of seven captions as a vector and a 
    function that resets the whole vector (needed for selecting different card each turn).


Game handler: contains the turn counter and the point counter, meme vector, captions
vector, an history vector that contains all elements of the rounds 
(meme, set of captions and selected caption, round points not needed because can be 
obtained with the element). 
    Functions:Has a function to update the turn (update counter, depending
    on the user type can be with one or three rounds if counter reach the user 
    type counter limit the game end).
    Has a funtion to manage the turn (gets a caption set, request selected and sets
    points and then resets the set vector).
    Last function returns points of each turn.

Turn history: contains indexes of the meme and captions (set and selected) from the game 
handler vectors.
    Functions: Other than the construction functions there are also functions to get 
    the elements indexes.

*/