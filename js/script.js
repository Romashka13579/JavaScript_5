var blocks = document.getElementsByClassName('blocks')[0]
var hexagon = document.getElementById("hexagon")
var around_mouse = document.getElementById("around-mouse")
for(var k=1; k<73; k++){
    if(k==10 || k==31 || k==52){
        blocks.innerHTML += "<div id='hexagon-2'></div>"
    }
    else if(k==20 || k==41 || k==62){
        blocks.innerHTML += "<div id='hexagon-3'></div>"
    }
    else{
        blocks.innerHTML += "<div id='hexagon'></div>"
    }
}
function Mouse_Position(event){
    var x = event.clientX;
    var y = event.clientY;
    console.log(x, y)
    around_mouse.style.display = "block"
    around_mouse.style.top = +(y-100)+"px"
    around_mouse.style.left = +(x-100)+"px"
}