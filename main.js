noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;


function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(600, 260);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
  background('white')
  textSize(difference);
  fill('#ADD8E6');
  text('Ruqaya', noseX, noseY)
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    
        document.getElementById("font_size").innerHTML = "Size of the text is = " + difference;
        
    }

}