import React from "react";
import "./Troll.css";

class Troll extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    // document.getElementById("hi").on("click", animate);
    // document.getElementById("goaway").on("click", bye);
    // var imgTag = new Image();
    // //var canvas = document.getElementById("myCanvas");
    // var x = canvas.width;
    // var y = 0;
    // imgTag.src =
    //   "https://vignette.wikia.nocookie.net/roblox/images/3/38/Transparent_Troll_Face.png/revision/latest?cb=20120713214853"; // load image

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
  }
  
  animate() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imgTag, x, y);
      x -= 4;
      y -= 0;
      if (x > 250) requestAnimationFrame(animate);
      document.getElementById("hi").addClass("hidden");
      document.getElementById("goaway").removeClass("hidden");
      // loop
    }
    bye() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imgTag, x, y);
      x -= 61;
      y -= 9;
      if (x < 400) requestAnimationFrame(bye);
      document.getElementById("hi").removeClass("hidden");
      document.getElementById("goaway").addClass("hidden");
    }
  render() {
    return (
      <React.Fragment>
        {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <title></title> */}

        <canvas href={this.canvasRef} width="400" height="400" id="myCanvas" />
        <button id="hi" class="col-md-2">
          KNOCK KNOCK
        </button>
        <button id="goaway" class="hidden col-md-2">
          ( ͡° ͜ʖ ͡°)K BYEEE
        </button>
      </React.Fragment>
    );
  }
}

export default Troll;
