"use strict";

function convertionToCapitals(names)
{
    let nameList = names.split(", ");
    let result = [];
    for ( let fullName of nameList )
    {
        let words = fullName.split(" ");
        let r = "";
        for ( let word of words )
        {
            r = r + word[0];
        }
        result.push(r);
    }
    return result.sort();
}


let string = "Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scibetta, Enrico Masala, Antonio Servetti";
let result = convertionToCapitals(string);
console.log(result);