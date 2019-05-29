let socket;
let bg;
let y = 0;
function preload() {
    bg = loadImage('./images/board.jpg');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(bg);
	socket = io.connect("http://localhost:3000/");
	socket.on("mouse", function(data){
        fill(0);
        noStroke();
        ellipse(data.x, data.y, 20, 20);
	});
}
function draw() {
}
function mouseDragged(){
	fill(0);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
	let data = {
		x: mouseX,
		y: mouseY
	};

	socket.emit('mouse', data);
}