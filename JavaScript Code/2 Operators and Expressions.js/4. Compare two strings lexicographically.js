//Compare two strings lexicographically.

function isLexicographicalOrder(str1,str2){
    if(str1===str2){
        console.log(`both strings ${str1} and ${str2} are lexicographically equal`);
    }
    else if(str1>str2){
        console.log(`${str1} comes first and ${str2} comes second lexicographically`);
    }
    else{
        console.log(`${str2} comes first and ${str1} comes second lexicographically `);
    }
}

    
let a="hello";
let b="bye";

let c="banana";
let d="grapes";

isLexicographicalOrder(a,b);
isLexicographicalOrder(c,d);