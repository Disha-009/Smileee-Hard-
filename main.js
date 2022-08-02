leftWristX=0;
rightWristX=0;
size=0;

function setup(){
    canvas=createCanvas(500, 500);
    canvas.position(700 ,100);
    video= createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 100);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("posenet loaded");
}

function draw(){
   background('white');
   textSize(size);
   fill('black');
   text('Smile biggerrr, and BIGGER!', 20,250 );
   document.getElementById('cc-size').innerHTML="Font-size= "+size;
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);        
        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.x;
        size=floor(leftWristX - rightWristX);

}


}




