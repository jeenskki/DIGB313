var addBox;
var color;
var count= 0;
var randomTop = 0;
var randomLeft = 0;
var position;


document.querySelector('.add-square').addEventListener('click', add);
document.querySelector('.change-color').addEventListener('click',change);

function getRandomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
function randomPosition() {
    randomTop = Math.floor(Math.random() * 540) + "px";
    randomLeft = Math.floor(Math.random() * 640) + "px";
    return "margin-top:"+randomTop+"; margin-left:"+randomLeft+";";
}
function add(){
    color = getRandomColor();
    position = randomPosition();
    addBox = document.createElement('div');
    addBox.setAttribute('id','square'+count);
    addBox.setAttribute('style', 'position: absolute; width: 60px; height: 60px; border: 1px solid #ddd; background:'+color+"; z-index="+count+";"+position);
    document.getElementById('root').appendChild(addBox);
    count++;
}
function change() {
    for(var i=0; i<count; i++) {
        color = getRandomColor();
        document.getElementById('square'+i).style.background = color;
    }
}
