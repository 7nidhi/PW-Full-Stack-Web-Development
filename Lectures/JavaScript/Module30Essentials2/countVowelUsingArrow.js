
/*
Create a funtion using "Arrow Function" keyword that takes a string as an argument and return the number of vowel
in the String
*/

const countVowel=(msg) =>{
    let count=0;
    for(const char of msg){
        if(
            char==="a" || 
            char==="e" || 
            char==="i" || 
            char==="o" || 
            char==="u"
        ){
            count++;
        }
        
    }
    return count;
};

console.log(countVowel("Nidhi"));