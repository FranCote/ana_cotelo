let loadScreen = document.createElement("div");
loadScreen.setAttribute("id", "loadScreen");
document.body.appendChild(loadScreen);

document.getElementById("loadScreen").style.height ='100vh';
document.getElementById("loadScreen").style.width ='100vw';
document.getElementById("loadScreen").style.position ='fixed';
document.getElementById("loadScreen").style.zIndex ='3';

document.getElementById("loadScreen").style.top ='0';
document.getElementById("loadScreen").style.backgroundColor ='red';
document.getElementById("loadScreen").style.transition ='opacity 200ms';


function opacFade(){
    document.getElementById('loadScreen').style.opacity = '0';

}

function clear() {
    
    document.getElementById('loadScreen').style.display = 'none';
}

window.addEventListener('load', (event) =>{
    opacFade();
    setTimeout(clear, 300);
});