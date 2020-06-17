var scores, roundscore,activeplayer;

scores = [0,0]
roundscore = 0;
activeplayer = 0;



var x = document.querySelector('#score-0').textContent;
function btn(){

    //Intialise the value to defaults..
    roundscore = 0;
    activeplayer = 0;
    scores = [0,0]

    //Set the Display to none on startup
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('#name-0' ).textContent = "Player 1";
    document.querySelector('#name-1' ).textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.add("active");
    document.querySelector('.player-1-panel').classList.remove("active");

}

function btn_rooll(){
    var dice = Math.floor(Math.random()*6+1);
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-'+dice+'.png';
    diceDOM.style.display = 'block';
    if (dice!=1){
        roundscore+=dice
    }
    else{
        roundscore = 0;
        document.querySelector('#current-' + activeplayer).textContent = roundscore;
        activeplayer === 0 ? activeplayer =1 : activeplayer = 0;
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
    }
    document.querySelector('#current-' + activeplayer).textContent = roundscore;


}

function btn_holddd(){
    scores[activeplayer] = scores[activeplayer] + roundscore;
    document.getElementById('score-'+activeplayer).textContent = scores[activeplayer];
    document.querySelector('#current-' + activeplayer).textContent = 0;
    if (scores[activeplayer] >= 20){
        document.querySelector('#name-' + activeplayer).textContent = "Winner !";
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';

    }
    else{
        activeplayer === 0 ? activeplayer =1 : activeplayer = 0;
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
        roundscore = 0;
    }


}


//Set the Display to none on startup
document.querySelector('.dice').style.display = 'none';

//Calling a function on click of new button
document.querySelector('.btn-new').addEventListener('click',btn);
document.querySelector('.btn-roll').addEventListener('click',btn_rooll);
document.querySelector('.btn-hold').addEventListener('click',btn_holddd);

//



















