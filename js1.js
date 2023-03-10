function changecolor1(){
    document.getElementById("a1").style.color="rgba(0, 0, 0, 0.267)"
}

function changecolor2(){
    document.getElementById("a2").style.color="rgba(0, 0, 0, 0.267)"
    document.getElementById("a1").style.color="black"
    document.getElementById("a3").style.color="black"
    document.getElementById("a4").style.color="black"
    document.getElementById("a5").style.color="black"
    document.getElementById("a6").style.color="black"
}

function changecolor3(){
    document.getElementById("a3").style.color="rgba(0, 0, 0, 0.267)"
    document.getElementById("a1").style.color="black"
    document.getElementById("a2").style.color="black"
    document.getElementById("a4").style.color="black"
    document.getElementById("a5").style.color="black"
    document.getElementById("a6").style.color="black"
}

function changecolor4(){
    document.getElementById("a4").style.color="rgba(0, 0, 0, 0.267)"
    document.getElementById("a1").style.color="black"
    document.getElementById("a2").style.color="black"
    document.getElementById("a3").style.color="black"
    document.getElementById("a5").style.color="black"
    document.getElementById("a6").style.color="black"
}

function changecolor5(){
    document.getElementById("a5").style.color="rgba(0, 0, 0, 0.267)"
    document.getElementById("a1").style.color="black"
    document.getElementById("a2").style.color="black"
    document.getElementById("a3").style.color="black"
    document.getElementById("a4").style.color="black"
    document.getElementById("a6").style.color="black"
}


function changecolor6(){
    document.getElementById("a6").style.color="rgba(0, 0, 0, 0.267)"
    document.getElementById("a1").style.color="black"
    document.getElementById("a2").style.color="black"
    document.getElementById("a3").style.color="black"
    document.getElementById("a5").style.color="black"
    document.getElementById("a4").style.color="black"
}

function submit1(){
   let a=document.getElementById('mno').value
   let b=document.getElementById('mail').value

   if(a!="" && b!="" && a.length==10){
    let a=document.getElementById('form1')
    let b=document.getElementById('forma')
    let c=document.getElementById('formre')

    a.innerHTML="<center><h1>Thank You</h1></center>"
    

   }
   else{
    let a= document.getElementById('h11');
    a.innerHTML="fill required details or enter correct mno & mail"
    a.style.color="red"
   }
}


