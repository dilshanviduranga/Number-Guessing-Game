let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);
let count =0;

function hoo(){
    if(count>1){
        document.getElementById("final").innerHTML = "Game Over..🤯";
        document.getElementById("output").innerHTML = "";
        return;
    }
    let number = document.getElementById("num").value;
    if(number==randomNumber){
        document.getElementById("output").innerHTML = "You won 🥳";
    }else if(number<randomNumber){
        document.getElementById("output").innerHTML = "Higher than "+number+" 😓";
    }else if(number>randomNumber){
        document.getElementById("output").innerHTML = "Lower than "+number+" 😪";
    }else{
        document.getElementById("output").innerHTML = "Wrong Input..!☠️";
    }

    count++;

    
}


    
