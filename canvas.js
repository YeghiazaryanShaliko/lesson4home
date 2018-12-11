function setup() {
    createCanvas(500,500);
    background('#acacac');
}
var value = 0;
function draw() {
  fill(value);
}

function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    return false;
  }