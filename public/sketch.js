var socket;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51)
    socket = io.connect("localhost:3000")
    socket.on('mouse',(data)=>{
        noStroke()
        fill(250, 0, 10);
        ellipse(data.x, data.y, 30, 30)
    })
  }
  function mouseDragged() {
      console.log(mouseX + "," + mouseY)
      var data = {
        x: mouseX,
        y: mouseY
    }
      socket.emit("mouse",data)
      noStroke()
      fill(255);
      ellipse(mouseX, mouseY, 32, 32)
     

  }
  
  function draw() {

  }