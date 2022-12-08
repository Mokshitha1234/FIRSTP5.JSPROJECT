function preload(){
    // to load any images/video files/audio files 
    
    
    }
    
    function setup(){
    // to create the canvas/webcam view
    canvas = createCanvas(640,480);
    canvas.position(100,250);
    video = createCapture(VIDEO);
    //video.position(100,250)
    video.hide()
    color = "";
    
    }
    
    function draw(){
    // functionalities --> drawing everything on the canvas & (loops -->continously repeting)
    fill("cyan")
    rect(30, 20, 580, 400);
    fill("darkcyan");
    circle(60, 60, 110);
    circle(580, 400, 110);
    circle(580, 60, 110);
    circle(60, 400, 110);
    noFill()
    image(video,160,80,300,300)
    }

    function take_snapshot(){
        save("My_snap.png")
        
        }