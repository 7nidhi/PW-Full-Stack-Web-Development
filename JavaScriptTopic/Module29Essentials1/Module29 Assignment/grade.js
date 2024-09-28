/* Calculate the grade of student based on their marks
 if greater than 90 then A grade
 if between 70 and 90 then B grade
 if between 50 and 70 then C grade
 Below 50 then F grade
*/
let num=45;
if(num>90){
    console.log("A");
}
else if(num<=90 && num>70){
    console.log("B");   
}
else if(num<=70 && num>=50){
    console.log("C");
}
else if(num<50){
    console.log("F");
}
else{
    console.log("Enter a valid Number");
}