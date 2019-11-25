window.onload = myInit();

var cvs, ctx;

function myInit(){
    cvs = document.getElementById('mycanvas');
    ctx = cvs.getContext('2d');
    var r = 10;

    drawCircle(10);
}

function drawCircle(rad){
    // ctx.beginPath();
    // ctx.arc(320,320, rad, 0, 2*Math.PI);
    // ctx.fill();

    function drawBigCircle(){
        if(rad < 310){
            ctx.beginPath();
            ctx.arc(320,320, rad, 0, 2*Math.PI);
            ctx.fill();
            rad += 0.5;
            requestAnimationFrame(drawBigCircle);
        }
        else{
            drawSmallCircle();
        }
    }

    function drawSmallCircle(){
        if(rad > 0){
            ctx.clearRect(0, 0, 640, 640);
            ctx.beginPath();
            ctx.arc(320,320, rad, 0, 2*Math.PI);
            ctx.fill();
            rad = rad - 0.5;
            requestAnimationFrame(drawSmallCircle);
        }
        else{
            drawBigCircle();
        }
    }

    drawBigCircle();
}


