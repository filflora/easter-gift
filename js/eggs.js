var w = window.innerWidth;
var h = window.innerHeight;
var eggs = [];
var eggWidth = 75;
var eggHeight = 102;
var max = 90;
var targetPoint = {
	x: null,
	y: null
}
var eggImages = [
	'images/gold-easter-egg.png',
	'images/purple-easter-egg.png',
	'images/pink-easter-egg.png',
	'images/blue-easter-egg.png'
];

var text;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var stage = new PIXI.Container();

var renderer = PIXI.autoDetectRenderer(w, h, {
	transparent: true
});

document.body.appendChild(renderer.view);


function setup() {
    for(let i = 0; i < 30; i++) {
        addEgg();
    }
}

function addEgg() {
    var texture = PIXI.Texture.fromImage(eggImages[random(0, eggImages.length-1)]);

    targetPoint.x = random(0, window.innerWidth);
    targetPoint.y = random(0, window.innerHeight);

    var egg = new PIXI.Sprite(texture);
    egg.anchor.x = 0.5;
    egg.anchor.y = 0.5;
    setEgg(egg);
    eggs.push(egg);
    stage.addChild(egg);
}

function setEgg(egg) {
	egg.position.x = targetPoint.x;
	egg.position.y = targetPoint.y;
	egg.vr = Math.random() > .5 ? Math.random() * -.01 : Math.random() * .01;
	egg.vx = random(-2, 2);
	egg.vy = random(-2, 2);
	var scale = random(5, 9) * .1;
	egg.scale.x = scale;
	egg.scale.y = scale;
	egg.inView = false;
	egg.life = 0;
	egg.maxLife = random(2000, 3000);
}


function animate() {
	for (var i in eggs) {
		var e = eggs[i];
		e.position.y += e.vy;
		e.position.x += e.vx;
		e.rotation += e.vr;
		e.vy += .01;
		e.scale.x *= .99;
		e.scale.y *= .99;
		e.life++;
		if (e.position.x + eggWidth / 2 < 0 ||
			e.position.x - eggWidth / 2 > w ||
			e.position.y + eggHeight / 2 < 0 ||
			e.position.y - eggHeight / 2 > h ||
			 e.life > e.maxLife) {
			if(e.inView){
				targetPoint.x = random(0, window.innerWidth);
    			targetPoint.y = random(0, window.innerHeight);
				setEgg(e);
			}
		} else {
			e.inView = true;
		}
	}
	renderer.render(stage);
	requestAnimationFrame(animate);
}

function resize(){
	w = window.innerWidth;
	h = window.innerHeight;
	renderer.resize(w, h);
}

window.addEventListener("resize", resize);

setup();
animate();