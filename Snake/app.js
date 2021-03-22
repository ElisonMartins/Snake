var stage = document.querySelector("canvas");
var ctx = stage.getContext("2d");
document.addEventListener("keydown", keyPush);
setInterval(game, 180);

const vel = 1;

var vx = vy = 0;
var px =10;
var py = 15;
var tp = 17;
var qp = 20;
var ax=ay=15;

var trail = [];
tail = 3;

var score = 10

function game(){
    px += vx;
    py += vy;
    if (px <0) {
        px = qp-1;
    }
    if (px > qp-1) {
        px = 0;
    }
    if (py < 0) {
        py = qp-1;
    }
    if (py > qp-1) {
        py = 0;
    }
    
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax*tp, ay*tp, tp,tp);
    
    

    ctx.fillStyle = "#04d361";
    
    ctx.fillText(score, 300, 30)
    ctx.font='20px arial';
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
        if (trail[i].x == px && trail[i].y == py)
        {
            
            score = 10
            vx = vy=0;
            tail =3;
            ctx.fillText('Inicio', 150, 30)
        }
    }

    trail.push({x:px,y:py })
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax==px && ay==py){
        score += 10
        tail++;
        ax = Math.floor(Math.random()*qp);
        ay = Math.floor(Math.random()*qp);
    }

}
//meu
function command(nomeDoBotao)  {
    switch (nomeDoBotao)  {
        case "up":
            vx = 0;
            vy = -vel;

            break;

        case "down":
            vx = 0;
            vy = vel;
            break;

        case "left":
            vx = -vel;
            vy = 0;
            break;

        case "right":
            vx = vel;
            vy = 0;
            break;
        case "space":
            score = 10
            vx = vy=0;
            tail =3;
            ctx.fillText('Inicio', 150, 30)
            break;
        default:
            break;

    }                  
}

function keyPush(event){

    switch (event.keyCode) {
        case 37: // Left
            vx = -vel;
            vy = 0;
            break;
        case 38: // up
            vx = 0;
            vy = -vel;
            break;
        case 39: // right
            vx = vel;
            vy = 0;
            break;
        case 40: // down
            vx = 0;
            vy = vel;
            break;   
        case 32: // space
            score = 10
            vx = vy=0;
            tail =3;
            ctx.fillText('Inicio', 150, 30)
            break;        
        default:
            
            break;
    }


}