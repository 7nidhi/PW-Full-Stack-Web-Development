
/*
Create a funtion using "Function" keyword that takes a string as an argument and return the number of vowel
in the String
*/
function countVowel(str){
    let count=0;
    for(const char of str){
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
}

console.log(countVowel("Nidhi"));