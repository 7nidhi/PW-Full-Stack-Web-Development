// Use logical AND and OR operators in different conditions.

function isAbleToVote(a,b){
    let age=18; let nationality="Indian";
    if(a>=age && (b===nationality)){
        console.log(`You are ${age} and you are ${nationality} so You can vote.`);
    }
    else if(a>=age && (b!=nationality)){
        console.log(`You are ${age} but You are not ${nationality}, so you can not vote.`);
    }
    else if(a<age && (b==nationality)){
        console.log(`You are not ${age} and you are ${nationality} so you can not vote.`);
    }
}

isAbleToVote(18,"Indian");
isAbleToVote(25,"US");
isAbleToVote(17,"Indian");