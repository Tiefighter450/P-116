var noseX;
var noseY;
function preload() {
    mustache = loadImage("https://th.bing.com/th/id/Rc304648ebb43b9ea9caa72a4f32bf3d0?rik=F087qn3Lea61vQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fmustache-png-32.png&ehk=ZN1vfxfKgYYdpawbcucXa68LSWfuktTrMDAQ1sz0ZSA%3d&risl=&pid=ImgRaw");
}
function setup() {
    video = createCapture(VIDEO);
    video.size(397, 298);
    canvas = createCanvas(397, 298);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function draw() {
    canvas.center();
    image(video, 0, 0, 397, 298);
    image(mustache, noseX - 33, noseY, 60, 40);
}
function takesnapshot() {
    save('MustacheImage.png');
}