window.onload = myInit();

var cvs, ctx;


function myInit(){
    cvs = document.getElementById('mycanvas');
    ctx = cvs.getContext('2d');

    cvs.height = innerHeight;
    cvs.width = innerWidth;

    var mouse = {
        x: undefined,
        y: undefined,
    };

    cvs.addEventListener('mousemove', function(e){
        mouse.x = e.x - 8
        mouse.y = e.y - 8
    });

    var circle1 = new Circle(300,300,100,'black');
    var circle2 = new Circle(undefined,undefined,50,'red');

    function animation(){
        ctx.clearRect(0,0,innerWidth,innerHeight);
        circle2.x = mouse.x;
        circle2.y = mouse.y;
        requestAnimationFrame(animation);
        circle1.update();
        circle2.update();
        if(getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius){
            circle1.color = 'red';
        }
        else{
            circle1.color = 'black';
        }
    }

    animation();
}

function getDistance(x1, y1, x2, y2){
    var xDistance = x2 - x1;
    var yDistance = y2 - y1;
    var total = Math.sqrt(Math.pow(xDistance,2)+Math.pow(yDistance,2));
    return total;
}


function Circle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2,false);
        ctx.fill();
        ctx.closePath();
    }
    this.update = function(){
        this.draw();
    }
}