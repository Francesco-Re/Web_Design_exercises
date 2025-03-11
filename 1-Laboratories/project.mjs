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

function Meme(image, ...captions)
{
    this.image = image; // for now I'll just insert either a dummy name or an int
    this.captions = captions;

    this.GetPoints = (cap) =>
    {
        index = this.captions.indexOf(cap);
        if (index == -1)
            return 0;
        return 3-index;
    }
}

function StackOfCap(...captions)
{
    this.captions = captions;
    for(i = 0; i<this.captions.length; i++)
    {
        this.capAvailable.push(0);
    }
    this.getAvail = (index) =>
    {
        this.capAvailable[index];
    }
    this.SetCaption = (index) =>
    {
        this.capAvailable[index] = 1;
    }

    this.ResetCaption = (index) =>
    {
        this.capAvailable[index] = 0;
    }

    this.giveHand = () =>
    {
        let index = 0;
        for(i = 0; i < 7; i++)
        { 
            do
            {
                index = Math.round(this.captions.length*Math.random);
                if(!this.getAvail(index))
                    index = -1;
            }while(index == -1);
            hand.push(index);
            this.SetCaption(index);
        }
        return hand;
    }

    this.ResetHand = (hand) =>
    {
        for(index of hand)
            this.ResetCaption(index);
    }

    this.selectCaption = (hand) =>
    {
        //Still need for input functions
    }


}

//made by copilot good fucking lord, needed some fixes tho
function GameHandler(memes, captions, user)
{
    this.memes = memes;
    this.captions = captions;
    this.user = user;
    this.turn = 0;
    this.points = 0;
    this.history = [];

    this.StartGame = () =>
    {
        this.ManageTurn();
    }

    this.UpdateTurn = () =>
    {
        this.turn++;
        if(this.user == 1 && this.turn == 3)
        {
            this.endGame();
            return 1;
        }
        if(this.user == 2 && this.turn == 1)
        {
            this.endGame();
            return 1;
        }
        this.ManageTurn();
        return 0;
    }

    this.ManageTurn = () =>
    {
        let meme = this.memes[Math.round(this.memes.length*Math.random)];
        let points = meme.GetPoints(this.captions[hand[selected]]);
        let hand = this.captions.giveHand();
        let selected = this.captions.selectCaption(hand);
        this.points += points;
        this.history.push([meme, hand, selected]);
        this.captions.ResetHand(hand);
        this.UpdateTurn();
    }

    this.GetPoints = () =>
    {
        return this.points;
    }

    this.endGame = () =>
    {
        this.date = 0;
    }

    this.showTurnHistory = (index) =>
    {
        //output of turn, cards obtained and selected and points obtained
    }
}