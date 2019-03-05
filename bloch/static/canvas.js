var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var y=60;

var x_f=100;
var y_f=35;

var done_x=[];
var done_y=[];

var inked=0;

var flag = 0;

var color="rgb(226, 21, 89)";

context.beginPath();
context.lineWidth = 1;
context.strokeStyle = '#919191'; 
context.moveTo(50,60);
context.lineTo(750, 60);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 1;
context.strokeStyle = 'rgb(255, 184, 208)'; 
//左上
context.moveTo(x_f+10,y_f);
context.lineTo(x_f, y_f);
context.lineTo(x_f, y_f+10);
//右上
x_f+=50;
context.moveTo(x_f-10,y_f);
context.lineTo(x_f, y_f);
context.lineTo(x_f, y_f+10);
//右下
y_f+=50;
context.moveTo(x_f-10,y_f);
context.lineTo(x_f, y_f);
context.lineTo(x_f, y_f-10);
//左下
x_f-=50;
context.moveTo(x_f,y_f-10);
context.lineTo(x_f, y_f);
context.lineTo(x_f+10, y_f);
context.stroke();
y_f-=50;

function frame(){
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(255, 184, 208)'; 
    //左上
    context.moveTo(x_f+10,y_f);
    context.lineTo(x_f, y_f);
    context.lineTo(x_f, y_f+10);
    //右上
    x_f+=50;
    context.moveTo(x_f-10,y_f);
    context.lineTo(x_f, y_f);
    context.lineTo(x_f, y_f+10);
    //右下
    y_f+=50;
    context.moveTo(x_f-10,y_f);
    context.lineTo(x_f, y_f);
    context.lineTo(x_f, y_f-10);
    //左下
    x_f-=50;
    context.moveTo(x_f,y_f-10);
    context.lineTo(x_f, y_f);
    context.lineTo(x_f+10, y_f);
    context.stroke();
    y_f-=50;
}

function frameout(){
    context.clearRect(x_f-7, y_f-7, 61, 20);
    context.clearRect(x_f-7, y_f+40, 61, 20);
}

function drawgate(color){
    context.fillStyle = color;
    context . fillRect(x_f-1, y_f-1, 52, 52);
}

function up(){
    for(var i=0; i<10; i++){
        if((done_x[i]==x_f)&&(done_y[i]==y_f-60)){
            flag=1;
        }
    }
    if((y_f>35)&&(flag==0)){
        if(inked==0){
            frameout();
        }
        y_f-=60;
        frame();
        inked=0;
    }
    flag=0;
}
function right(){
    for(var i=0; i<10; i++){
        if((done_x[i]==x_f+60)&&(done_y[i]==y_f)){
            flag=1;
        }
    }
    if((x_f<640)&&(flag==0)){
        if(inked==0){
            frameout();
        }
        x_f+=60;
        frame();
        inked=0;
    }
    flag=0;
}
function left(){
    for(var i=0; i<10; i++){
        if((done_x[i]==x_f-60)&&(done_y[i]==y_f)){
            flag=1;
        }
    }
    if((x_f>100)&&(flag==0)){
        if(inked==0){
            frameout();
        }
        x_f-=60;
        frame();
        inked=0;
    }
    flag=0;
}
function down(){
    for(var i=0; i<10; i++){
        if((done_x[i]==x_f)&&(done_y[i]==y_f+60)){
            flag=1;
        }
    }
    if((y_f<215)&&(flag==0)){
        if(inked==0){
            frameout();
        }
        y_f+=60;
        frame();
        inked=0;
    }
    flag=0;
}

function lineAdd(){
    if(y<240){
        y+=60;
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = '#919191'; 
        context.moveTo(50,y);
        context.lineTo(750, y);
        context.closePath();
        context.stroke();
    }
}

function lineSuv(){
    if(y>60){
        y-=1;
        context.clearRect(50, y, 700, 2);
        y-=59;
    }
}

function send(){
    drawgate(color);
    inked=1;
    done_x.push(x_f);
    done_y.push(y_f);

    context.fillStyle = "white";
    context.font = "30px 'Hiragino Maru Gothic ProN'";
    context.textAlign = "center";
    context.fillText(result, x_f+25, y_f+35, 200);
}

var type='image/png'

function get(){
    var target = canvas.toDataURL(type);
    document.getElementById("data_url").href = target;
}



