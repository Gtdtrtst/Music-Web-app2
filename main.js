song1 ="";
song2 ="";
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide() ;
}

function draw(){
    image(video,0,0,600,450);
}

function preload(){
    song1 = loadSound("Music1.mp3");
    song2 = loadSound("Music2.mp3");
}
