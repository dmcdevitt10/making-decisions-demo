/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/


let jonSnowAttack = 25;
let jaimeLannisterAttack = 35;

if (jonSnowAttack > jaimeLannisterAttack) {
    console.log("Jon Snow is more beefy")
}else if (jaimeLannisterAttack === jonSnowAttack) {
        console.log("Equaly strong")
    }else {
        console.log("Jaime is the og");
    }


let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jaimeLannisterAttack) {
    console.log("Jon Snow has been slain") 

    }else{
        jonSnowHealth -= jaimeLannisterAttack;
        console.log("Jon's health is down to " + jonSnowHealth)
    }


jonSnowDefense += 25;

if(jonSnowHealth <= jaimeLannisterAttack){
    console.log("jon has been slain")
}else{
    jonSnowHealth -= jaimeLannisterAttack - jonSnowDefense;
    console.log("Jons's health is down to " + jonSnowHealth);
}

if(jonSnowHealth + 50 >= 100){
    jonSnowHealth = 100;
}else{
    jonSnowHealth += 50;
}
console.log(jonSnowHealth);

let coinLandsHeads = false;

if(coinLandsHeads){
    console.log("The fight continues!")
}else{
    console.log("Jon is allowed to run away")
}

for(let i = 0; i < 5; i++){
    if(jonSnowHealth <= 0){
        console.log("Jon has been slain")
    }else{
        jonSnowHealth -= jaimeLannisterAttack - jonSnowDefense;
        console.log(`Jon's health is now ${jonSnowHealth}`);
    }
    }

    while(jonSnowHealth > 0){
        jonSnowHealth -= jaimeLannisterAttack - jonSnowDefense;
        if(jonSnowHealth <= 0){
            console.log("Jon snow is finally dead")
        }else{
            console.log(`Jon's health is now ${jonSnowHealth}`);
        }
        }

        if(jonSnowAttack > 25 && jonSnowAttack < 75){
            console.log("Jon is mid level beast")
        }

        if(jaimeLannisterAttack < 25 || jaimeLannisterAttack > 75){
            console.log("Jamie is strong if he ate his wheaties");
        }else{
            console.log("Jaime is mid level Beast")
        }