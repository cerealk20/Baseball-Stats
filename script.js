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

function showBatters(){    x=document.getElementById("angels-logo");
 x.className="open";
  y=document.getElementById("angels-batters");
 y.className="open";
  z=document.getElementById("angels-pitchers");
 z.className="closed"; 
                       
                        a=document.getElementById("dodgers-logo");
 a.className="open";
  b=document.getElementById("dodgers-batters");
 b.className="open";               c=document.getElementById("dodgers-pitchers");
 c.className="closed";                     
}

function showPitchers(){    x=document.getElementById("angels-logo");
 x.className="open";
  y=document.getElementById("angels-batters");
 y.className="closed";
  z=document.getElementById("angels-pitchers");
 z.className="open"; 
                       
                        a=document.getElementById("dodgers-logo");
 a.className="open";
  b=document.getElementById("dodgers-batters");
 b.className="closed";               c=document.getElementById("dodgers-pitchers");
 c.className="open";                     
}

// This opens the drop down menu when the filters button is clickeded
function dropFilters(){
  document.getElementById("drop-menu").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.filter-button')) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//We can create 2 separate arrays for OBP and SLG and add them together to get an array for OPS

//We can also create an object for each player that adds the properties OBP and SLG and then we call each property in the tables

//Stats current as of 7/1 9:30am

const OBP=[.387, .350, .399, .383, .379, .279];
const SLG=[.650, .505, .548, .592, .456, .400];
let OPS=[]

for(let i=0; i<OBP.length; i++){
  let x=OBP[i] + SLG[i];
  OPS.push(x.toFixed(3));
}


document.getElementById("trout").innerHTML=OPS[0];
document.getElementById("ohtani").innerHTML=OPS[1];
document.getElementById("ward").innerHTML=OPS[2];
document.getElementById("betts").innerHTML=OPS[3];
document.getElementById("freeman").innerHTML=OPS[4];
document.getElementById("bellinger").innerHTML=OPS[5];