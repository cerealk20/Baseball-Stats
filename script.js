// this function shows Angels stats while hiding Dodgers stats
function showAngels(){
 x=document.getElementById("angels-logo");
 x.className="open";
 y=document.getElementById("angels-batters");
 y.className="open"; 
 z=document.getElementById("angels-pitchers");
 z.className="open"
  
 a=document.getElementById("dodgers-logo");
 a.className="closed";
 b=document.getElementById("dodgers-batters");
 b.className="closed"; 
 c=document.getElementById("dodgers-pitchers")
 c.className="closed"
}


// this function shows Dodgers stats while hiding Angels stats
function showDodgers(){
  x=document.getElementById("dodgers-logo");
  x.className="open";
  y=document.getElementById("dodgers-batters");
  y.className="open"; 
  z=document.getElementById("dodgers-pitchers")
  z.className="open"
 
  
  a=document.getElementById("angels-logo");
  a.className="closed";
  b=document.getElementById("angels-batters");
  b.className="closed"; 
  c=document.getElementById("angels-pitchers")
  c.className="closed"
}

//We can create 2 separate arrays for OBP and SLG and add them together to get an array for OPS

//We can also create an object for each player that adds the properties OBP and SLG and then we call each property in the tables

//Stats current as of 6/7 1pm

const OBP=[.382, .322, .443, .383, .379, .279];
const SLG=[.575, .445, .644, .592, .456, .400];
let OPS=[]

for(let i=0; i<OBP.length; i++){
  OPS.push(OBP[i] + SLG[i]);
}

document.getElementById("trout").innerHTML=OPS[0];
document.getElementById("ohtani").innerHTML=OPS[1];
document.getElementById("ward").innerHTML=OPS[2];
document.getElementById("betts").innerHTML=OPS[3];
document.getElementById("freeman").innerHTML=OPS[4];
document.getElementById("bellinger").innerHTML=OPS[5];