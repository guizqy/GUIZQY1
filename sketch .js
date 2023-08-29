let verde="rgb(0,255,0)";
let verdeApagado="rgba(0,255,0,0.4)";
let amarelo="rgb(255,255,0)";
let amareloApagado="rgba(255,255,0,0.4)";
let vermelho="rgb(255,0,0)";
let vermelhoApagado="rgba(255,0,0,0.4)";
let tempo=0;

function setup(){
 createCanvas(600,600);
}

  function draw(){
    background(255);
    caixaSemaforo();
    switch(true){
        case tempo<60:
        faseAberto(); 
        tempo++;
        break;
        case tempo<120:
        faseAtencao();
        tempo++;
        break;
        case tempo<200:
        faseFechada();
        tempo++;
        break;
        default:
        tempo=0;
    }
    
}
    function faseFechada(){
      S(verdeApagado,325,280);
      S(amareloApagado,325,230);
      S(vermelho,325,180);
    }
    
function faseAberto(){
  S(verde,325,280);
  S(amareloApagado,325,230);
  S(vermelhoApagado,325,180);
}

function faseAtencao(){
  S(verdeApagado,325,280);
  S(amarelo,325,230);
  S(vermelhoApagado,325,180);
}

  function caixaSemaforo(){
    fill(0);
    stroke(220,220,2200);
    strokeWeight(1);
    rect(300,150,50,150);
  }
    
    function S(cor,x,y) {
      fill(cor);
      ellipse(x,y,30,30);
    } 
