video = "";
status = "";

function preload() {
    video.createVideo("video.mp4");
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function setup() {
    canvas = createCanvas(550, 400);
    canvas.center();

}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;

    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw() {
    image(video, 0, 0, 550, 440);
}