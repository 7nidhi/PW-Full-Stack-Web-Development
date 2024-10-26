let x=function(){
    console.log("NIDHI");
}
x();

//Immediatlly invoke function
(function exec(){
    console.log("named");
})();

(function (x){
    console.log(x*x);
})(5);
