"use strict"; 

function voteConverter(voteList)
{
    let newList = voteList.filter(e => e >= 0);
    let NN = voteList.length - newList.length;

    newList.sort((a, b) => b - a);
    newList.pop();
    newList.pop();
    
    
    let average = newList.reduce((somma, val) => somma += val, 0)/newList.length;
    for(let i = 0; i<NN+2; i++)
    {
        newList.push(average);
    }
    return newList.sort();
}

let votes = [-6, 3, 5, 12, -5, -10];
console.log("Before improvement: \n", votes.sort((a, b) => a-b),
            "\nAfter improvement: \n", voteConverter(votes)
);