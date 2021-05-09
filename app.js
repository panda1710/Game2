var score,roundscore,activeplayer,dice;
 score=[0,0];
 roundscore=0;
 activeplayer=0;
 document.querySelector('.dice').style.display='none';
 document.getElementById('score-0').textContent='0';
 document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';
  //document.querySelector('#current-'+ activeplayer).textcontent = dice;  
  document.querySelector('.btn-roll').addEventListener('click',function()
  {
    var dice= Math.floor(Math.random()*6)+1;
    var diceres=document.querySelector('.dice');
    diceres.style.display='block';
    diceres.src='dice-'+dice +'.png';
    if(dice!==1)
    {
        roundscore+=dice;
        document.querySelector('#current-'+activeplayer).innerHTML=roundscore;//display roundscore on user interface

    }
    else{
         nextplayer();
         }
           // document.querySelector('.dice').style.display='none';
            //document.querySelector('.player-0-panel').classList.remove('active');
    });          //document.querySelector('.player-1-panel').classList.add('active');

document.querySelector('.btn-hold').addEventListener('click',function()
{
  //current score to global score
  score[activeplayer]+=roundscore;
  //update UI
  document.querySelector('#score-'+ activeplayer).innerHTML=score[activeplayer];
  //click if player won the game
  if(score[activeplayer]>=10)
  {
    document.querySelector('#name-' + activeplayer).innerHTML='winner!'
  }
  else{
    nextplayer();
  }
  //next player
  nextplayer();
});
function nextplayer()
{
  activeplayer===0 ? activeplayer=1:activeplayer=0;
  roundscore=0;
  document.getElementById('current-0').innerHTML='0';
  document.getElementById('current-1').innerHTML='0';

    //removing and adding classes
    document.querySelector('.player-0-panel').classList.toggle('active');
  
}
  

  /*document.querySelector('#current-'+activeplayer).innerHTML='<em>' + dice+'</em>';
  var x= document.querySelector('#current-0').innerHTML;
  console.log(x);*/