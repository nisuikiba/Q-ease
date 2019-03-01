window.addEventListener('load', init);

//Target Stateのゲートのカウンタ
var counter_x_q = 0;
var counter_y_q = 0;
var counter_z_q = 0;
var counter_h_q = 0;
var counter_s_q = 0;
var counter_st_q = 0;
//var counter_t_q = 0;
//var counter_tt_q = 0;

//Your Stateのゲートのカウンタ
var counter_x = 0;
var counter_y = 0;
var counter_z = 0;
var counter_h = 0;
var counter_s = 0;
var counter_st = 0;
//var counter_t = 0;
//var counter_tt = 0;

//手数計算用のカウンタ
var counter_x_sub = 0;
var counter_y_sub = 0;
var counter_z_sub = 0;
var counter_h_sub = 0;
var counter_s_sub = 0;
var counter_st_sub = 0;
//var counter_t_sub = 0;
//var counter_tt_sub = 0;

//Target Stateの回転の記録
var rote_x = 0;
var rote_y = 0;
var rote_z = 0;
var rote_yz = 0;

//Your Stateの回転の記録
var move_x = 0;
var move_y = 0;
var move_z = 0;
var move_yz = 0;

status_q = [rote_x, rote_y, rote_z, rote_yz];
status_y = [move_x, move_y, move_z, move_yz];

//X軸回転のフラッグ
var flag_x = 0; 
var flag_x_q = 0;

//ユーザの手数
var your_num = 0;

//位相ゲートの回転角
var z_angle = 1;
var s_angle = 1/2;
var st_angle = -1/2;
var t_angle = 1/4;
var tt_angle = -1/4;

var rote_axis_y = 0; 
var rote_axis_old_y = 0;

var rote_axis = 0; 
var rote_axis_old = 0; 

var phase_old_y = 0;

var phase_old = 0;

var rote_axis_before_q=0;

var ideal_num = 0;

var your_num_repo=0;

function rote_cal_y(){
    //処理
    counter_x_sub+=counter_x-counter_x_sub;
    counter_z_sub+=counter_z;
    counter_h_sub+=counter_h-counter_h_sub;
    counter_s_sub+=counter_s;
    counter_st_sub+=counter_st;
    status_y[3]=counter_h;
    if ((status_y[3]%2)!=0){ 
        //Hが奇数なのでz軸のみ評価　　
        while(counter_z!=0){
            status_y[2]+=z_angle;
            counter_z-=1;
        }
        while(counter_s!=0){
            status_y[2]+=s_angle;
            counter_s-=1;
        }
        while(counter_st!=0){
            status_y[2]+=st_angle;
            counter_st-=1;
        }
        if(rote_axis_old_y==1){
            if(status_y[2]>1){
                status_y[2]=status_y[2]-2;
            }else if(status_y[2]<=-1){
                status_y[2]=status_y[2]+2;
            }
        }else{
            if(flag_x==0){ 
                if(status_y[2]>1){
                    status_y[2]=status_y[2]-2;
                }else if(status_y[2]<=-1){
                    status_y[2]=status_y[2]+2;
                }
                phase_old_y=0;
            }else{ 
                status_y[2]+=1;
                if(status_y[2]>1){
                    status_y[2]=status_y[2]-2;
                }
                phase_old_y=1;
            }
        }
    }else{ 
        //Hが偶数なのでx軸のみ評価
        status_y[0]=counter_x;
        if(rote_axis_old_y==1){
            if(phase_old_y!=status_y[2]){
                status_y[0]+=1;
                counter_x+=1;
            }
            if(status_y[2]==1){ 
                flag_x=1;
            }
            if((status_y[0]%2)!=0){
                //xが奇数
                flag_x = 1;
            }else{
                //xが偶数
                flag_x = 0;
            } 
            status_y[2]=0; 
        }else{
            if((status_y[0]%2)!=0){
                //xが奇数
                flag_x = 1;
            }else{
                //xが偶数
                flag_x = 0;
            } 
        }
    }
}

function rote_cal_q(){
    status_q[3]=counter_h_q;
    if ((status_q[3]%2)!=0){ 
        //Hが奇数なのでz軸のみ評価　　
        while(counter_z_q!=0){
            status_q[2]+=z_angle;
            counter_z_q-=1;
        }
        while(counter_s_q!=0){
            status_q[2]+=s_angle;
            counter_s_q-=1;
        }
        while(counter_st_q!=0){
            status_q[2]+=st_angle;
            counter_st_q-=1;
        }
        if(rote_axis_old==1){
            if(status_q[2]>1){
                status_q[2]=status_q[2]-2;
            }else if(status_q[2]<=-1){
                status_q[2]=status_q[2]+2;
            }
        }else{
            if(flag_x_q==0){ 
                if(status_q[2]>1){
                    status_q[2]=status_q[2]-2;
                }else if(status_q[2]<=-1){
                    status_q[2]=status_q[2]+2;
                }
                phase_old=0;
            }else{ 
                status_q[2]+=1;
                if(status_q[2]>1){
                    status_q[2]=status_q[2]-2;
                }
                phase_old=1;
            }
        }
    }else{ 
        //Hが偶数なのでx軸のみ評価
        status_q[0]=counter_x_q;
        if(rote_axis_old==1){
            if(phase_old!=status_q[2]){
                status_q[0]+=1;
                counter_x_q+=1;
            }
            if(status_q[2]==1){ 
                flag_x_q=1;
            }
            if((status_q[0]%2)!=0){
                //xが奇数
                flag_x_q = 1;
            }else{
                //xが偶数
                flag_x_q = 0;
            } 
            status_q[2]=0; 
        }else{
            if((status_q[0]%2)!=0){
                //xが奇数
                flag_x_q = 1;
            }else{
                //xが偶数
                flag_x_q = 0;
            } 
        }
    }
}

function init() {

    //サイズを指定
    const width = 640;
    const height = 360;

    //回転の基準となるベクトルを作成
    var Axis = {  
        "x" : new THREE.Vector3(1, 0, 0).normalize(),
        "y" : new THREE.Vector3(0, 1, 0).normalize(),
        "z" : new THREE.Vector3(0, 0, 1).normalize(),
        "y-z" : new THREE.Vector3(0, 1, 1).normalize()
    };

    //レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0xF2F2F2);

    //シーンを作成
    const scene = new THREE.Scene();

    //カメラを作成
    const camera = new THREE.PerspectiveCamera(45, 640 / 360);
    camera.position.set(0, 0, +1000);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;

    //ベクトル描画
    const from_x = new THREE.Vector3(0, 0, 0);
    const to_x = new THREE.Vector3(0, 0, 1);
    const direction_x = to_x.clone().sub(from_x);
    const length_x = 100;
    const x_arrow = new THREE.ArrowHelper(direction_x.normalize(), from_x, length_x, 0x29b0da, 14, 14);
    scene.add(x_arrow);

    const from_y = new THREE.Vector3(0, 0, 0);
    const to_y = new THREE.Vector3(1, 0, 0);
    const direction_y = to_y.clone().sub(from_y);
    const length_y = 100;
    const y_arrow = new THREE.ArrowHelper(direction_y.normalize(), from_y, length_y, 0xda2932, 14, 14);
    scene.add(y_arrow);

    const from_z = new THREE.Vector3(0, 0, 0);
    const to_z = new THREE.Vector3(0, 1, 0);
    const direction_z = to_z.clone().sub(from_z);
    const length_z = 100;
    const z_arrow = new THREE.ArrowHelper(direction_z.normalize(), from_z, length_z, 0x9ceb43, 14, 14);
    scene.add(z_arrow);

    const from = new THREE.Vector3(0, 0, 0);
    const to = new THREE.Vector3(0, 1, 0);
    const direction = to.clone().sub(from);
    const length = 300;
    const arrowHelper = new THREE.ArrowHelper(direction.normalize(), from, length, 0xDF013A, 25, 20);
    scene.add(arrowHelper);

    //球を作成
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    const material = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.3});
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    //ワイヤフレーム描画
    const geo = new THREE.EdgesGeometry(sphere.geometry);
    const mat = new THREE.LineBasicMaterial({color: 0xBDBDBD,linewidth:2});
    const wireframe = new THREE.LineSegments(geo, mat);
    sphere.add(wireframe);
    
    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(20, 10, 30);
    scene.add(directionalLight);
    
    //レンダリング
    function tick() {
        sphere.rotation.y += 0.002;
        renderer.render(scene, camera); 
        requestAnimationFrame(tick);
    }

    tick();
    
    var flag = 0;

    var quaternion = arrowHelper.quaternion;
    var target = new THREE.Quaternion();
    
    //xゲート
    document.getElementById('x').onclick = function xgate(){
       if(flag < Math.PI){
           target.setFromAxisAngle(Axis["z"], Math.PI/50);
           target.multiply(quaternion.clone());  
           quaternion.copy(target);  
           flag += Math.PI/50;
           requestAnimationFrame(xgate);
       }else{
           flag = 0;
           counter_x += 1;
           rote_axis_old_y = rote_axis_y;
           rote_cal_y();
       }
    }

    //zゲート
    document.getElementById('z').onclick = function zgate(){
        if(flag < Math.PI){
            target.setFromAxisAngle(Axis["y"], Math.PI/50);
            target.multiply(quaternion.clone());  
            quaternion.copy(target);  
            flag += Math.PI/50;
            requestAnimationFrame(zgate);
        }else{x
            flag = 0;
            counter_z += 1;
            rote_axis_old_y = rote_axis_y;
            rote_cal_y();
        }
    }

    //hゲート
    document.getElementById('h').onclick = function hgate(){
        if(flag < Math.PI){
            target.setFromAxisAngle(Axis["y-z"], Math.PI/50);
            target.multiply(quaternion.clone());  
            quaternion.copy(target);  
            flag += Math.PI/50;
            requestAnimationFrame(hgate);
        }else{
            flag = 0;
            counter_h += 1;
            rote_axis_old_y = rote_axis_y;
            if(rote_axis_y==0){ 
                rote_axis_y=1;
            }else{ 
                rote_axis_y=0;
            }
            rote_cal_y();
        }
    }

    //sゲート
    document.getElementById('s').onclick = function sgate(){
        if(flag < Math.PI/2){
            target.setFromAxisAngle(Axis["y"], Math.PI/50);
            target.multiply(quaternion.clone());  
            quaternion.copy(target);  
            flag += Math.PI/50;
            requestAnimationFrame(sgate);
        }else{
            flag = 0;
            counter_s += 1;
            rote_axis_old_y = rote_axis_y;
            rote_cal_y();
        }
    }

    //stゲート
    document.getElementById('st').onclick = function stgate(){
        if(flag < Math.PI/2){
            target.setFromAxisAngle(Axis["y"], -Math.PI/50);
            target.multiply(quaternion.clone());  
            quaternion.copy(target);  
            flag += Math.PI/50;
            requestAnimationFrame(stgate);
        }else{
            flag = 0;
            counter_st += 1;
            rote_axis_old_y = rote_axis_y;
            rote_cal_y();
        }
    }

    /*
    //tゲート
    document.getElementById('t').onclick = function tgate(){
        if(flag < Math.PI/4){
            target.setFromAxisAngle(Axis["y"], Math.PI/48);
            target.multiply(quaternion.clone());  
            quaternion.copy(target);  
            flag += Math.PI/48;
            requestAnimationFrame(tgate);
        }else{
            flag = 0;
            counter_t += 1;
            rote_axis_old_y = rote_axis_y;
            rote_cal_y();
        }
    }

    //ttゲート
    document.getElementById('tt').onclick = function ttgate(){
        if(flag < Math.PI/4){
            target.setFromAxisAngle(Axis["y"], -Math.PI/48);
            target.multiply(quaternion.clone());  
            quaternion.copy(target);  
            flag += Math.PI/48;
            requestAnimationFrame(ttgate);
        }else{
            flag = 0;
            counter_tt += 1;
            rote_axis_old_y = rote_axis_y;
            rote_cal_y();
        }
    }*/

    //はじめからボタン
    document.getElementById('start').onclick = function start(){
        location.reload();
    }
}

window.addEventListener('load', init2);

function init2() {

    //サイズを指定
    const width = 528;
    const height = 297;

    //回転の基準となるベクトルを作成
    var Axis = {  
        "x" : new THREE.Vector3(1, 0, 0).normalize(),
        "y" : new THREE.Vector3(0, 1, 0).normalize(),
        "z" : new THREE.Vector3(0, 0, 1).normalize(),
        "y-z" : new THREE.Vector3(0, 1, 1).normalize()
    };

    //レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#subCanvas')});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x6E6E6E);

    //シーンを作成
    const scene2 = new THREE.Scene();

    //カメラを作成
    const camera = new THREE.PerspectiveCamera(45, 528 / 297);
    camera.position.set(0, 0, +1000);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;

    //ベクトル描画
    const from_x = new THREE.Vector3(0, 0, 0);
    const to_x = new THREE.Vector3(0, 0, 1);
    const direction_x = to_x.clone().sub(from_x);
    const length_x = 100;
    const x_arrow = new THREE.ArrowHelper(direction_x.normalize(), from_x, length_x, 0x29b0da, 14, 14);
    scene2.add(x_arrow);

    const from_y = new THREE.Vector3(0, 0, 0);
    const to_y = new THREE.Vector3(1, 0, 0);
    const direction_y = to_y.clone().sub(from_y);
    const length_y = 100;
    const y_arrow = new THREE.ArrowHelper(direction_y.normalize(), from_y, length_y, 0xda2932, 14, 14);
    scene2.add(y_arrow);

    const from_z = new THREE.Vector3(0, 0, 0);
    const to_z = new THREE.Vector3(0, 1, 0);
    const direction_z = to_z.clone().sub(from_z);
    const length_z = 100;
    const z_arrow = new THREE.ArrowHelper(direction_z.normalize(), from_z, length_z, 0x9ceb43, 14, 14);
    scene2.add(z_arrow);

    const from = new THREE.Vector3(0, 0, 0);
    const to = new THREE.Vector3(0, 1, 0);
    const direction = to.clone().sub(from);
    const length = 300;
    const arrowHelper = new THREE.ArrowHelper(direction.normalize(), from, length, 0xDF013A, 25, 20);
    scene2.add(arrowHelper);

    //球を作成
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    const material = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.3});
    const sphere = new THREE.Mesh(geometry, material);
    scene2.add(sphere);

    //ワイヤフレーム描画
    const geo = new THREE.EdgesGeometry(sphere.geometry);
    const mat = new THREE.LineBasicMaterial({color: 0xA4A4A4,linewidth:2});
    const wireframe = new THREE.LineSegments(geo, mat);
    sphere.add(wireframe);
    
    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(10, 10, 20);
    scene2.add(directionalLight);
    
    //レンダリング
    function tick2() {
        sphere.rotation.y += 0.002;
        renderer.render(scene2, camera); 
        requestAnimationFrame(tick2);
    }

    tick2();
    
    var quaternion = arrowHelper.quaternion;
    var target = new THREE.Quaternion();

    //xゲート
    function xgate(){
        target.setFromAxisAngle(Axis["z"], Math.PI);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        counter_x_q += 1;
    }
 
    //zゲート
    function zgate(){
        target.setFromAxisAngle(Axis["y"], Math.PI);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        counter_z_q += 1;
    }
    
    //hゲート
    function hgate(){
        target.setFromAxisAngle(Axis["y-z"], Math.PI);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        counter_h_q += 1;
    }

    //sゲート
    function sgate(){
        target.setFromAxisAngle(Axis["y"], Math.PI/2);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        counter_s_q += 1;
    }

    //stゲート
    function stgate(){
        target.setFromAxisAngle(Axis["y"], -Math.PI/2);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        counter_st_q += 1;
    }

    /*
    //tゲート
    function tgate(){
        target.setFromAxisAngle(Axis["y"], Math.PI/4);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        counter_t_q += 1;
    }

    //ttゲート
    function ttgate(){
        target.setFromAxisAngle(Axis["y"], -Math.PI/4);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        counter_tt_q += 1;
    }*/

    func_first = ["xgate", "hgate"];
    func_e = ["zgate", "sgate", "stgate"];
    func_s = ["zgate", "sgate", "stgate", "tgate", "ttgate"];
    
    function correct() {
        alert("CONGRATULATION！\nYou realized the target state with the ideal number of steps!");
    }

    function well() {
        alert("WELL DONE！\nYou realized the target state with more steps than ideal.");
    }

    function fault() {
        alert("ERROR！\nIt is not the target state.");
    }
    
    document.getElementById('check').onclick = function check(){
        if(number_q == 0){
            judge_e();
        }else if(number_q == 1){
            judge_s();
        }
    }
    
    function judge_e(){
        //ideal_numを計算
        if(rote_axis_before_q==rote_axis){ //同界
            ideal_num=1;
        }else{
            ideal_num=2;
        }   
        your_num_repo += your_num;
        your_num = counter_x_sub+counter_z_sub+counter_h_sub+counter_s_sub+counter_st_sub-your_num_repo;
        if((status_q[2]==status_y[2])&&(status_q[3]%2==status_y[3]%2)){
            if(your_num<=ideal_num){
                correct();
            }else{
                well();
            }
        }else{
            fault();
            location.reload();
        }
        rote_axis_before_q = rote_axis_y;
    }

    function judge_s(){
        correct();
    }

    var number_q = 10;

    document.getElementById('easy').onclick = function(){
        number_q = 0;
    }

    document.getElementById('standard').onclick = function(){
        number_q = 1;
        alert("I'M SORRY!\nThis version is currently under construction.");
    }

    var random = 0;

    document.getElementById('question').onclick = function question(){
        if(number_q == 0){
            easy();
        }else if(number_q == 1){
            standard();
        }
    }

    function easy(){
        rote_axis_old = rote_axis;
        if((status_q[2]==0)||(status_q[2]==1)){
            random = Math.floor(Math.random()*func_first.length);
        }else{
            random = 1;
        }
        if(random==0){ 
            if(rote_axis_old==0){ //現在x軸回転
                xgate();
            }else{ //現在z軸回転　
                hgate();
                xgate();
            }
            rote_axis = 0;
        }else{ 
            if(rote_axis_old==0){ //現在x軸回転　
                hgate(); 
                random = Math.floor(Math.random()*func_e.length);
                eval(func_e[random])();
            }else{ //現在z軸回転
                random = Math.floor(Math.random()*func_e.length);
                eval(func_e[random])();
            }
            rote_axis = 1;
        }  
        rote_cal_q();
    }

    function standard(){
        //準備中
    }

}
