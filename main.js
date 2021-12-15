img = "";

function preload() {
    img = loadImage('headphones_and_laptop.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Laptop", 165, 50);
    text("92%", 210, 50);
    noFill();
    stroke("#FF0000");
    rect(150, 20, 340, 200 );

    fill("#FF0000");
    text("Phone", 55, 135);
    text("97%", 95, 135);
    noFill();
    stroke("#FF0000");
    rect(50, 120, 100, 100 );

    fill("#FF0000");
    text("Headphones", 265, 135);
    text("98%", 340, 135);
    noFill();
    stroke("#FF0000");
    rect(250, 110, 185, 170 );

    fill("#FF0000");
    text("Coffee", 475, 80);
    text("99%", 520, 80);
    noFill();
    stroke("#FF0000");
    rect(455, 65, 150, 150 );
}