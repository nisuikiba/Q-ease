window.addEventListener('load', init_2);

var counter_x = 0;
var counter_z = 0;
var counter_h = 0;
var counter_s = 0;
var counter_st = 0;
var counter_t = 0;
var counter_tt = 0;
var number_q = 0;

function init_2() {

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
    //document.getElementById("Test").innerHTML = "HAHAHA";
    
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
        }
    }

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
        }
    }

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

    
    function correct() {
        alert("CONGRATULATION！\nYou realized the target state with the ideal number of steps!");
    }

    function fault() {
        alert("WELL DONE！\nYou realized the target state with more　steps than ideal.");
    }
    
    document.getElementById('check').onclick = function check(){
        if(number_q==1){
            judge_q1();
        }else if(number_q==2){
            judge_q2();
        }else if(number_q==3){
            judge_q3();
        }
    }

    function judge_q1(){
        if(counter_x == 1 && counter_z == 0 && counter_h == 0 && counter_s == 0 && counter_st == 0 && counter_t == 0 && counter_tt == 0){
            correct();
            location.reload();
        }else{
            fault();
            location.reload();
        }
    }

    function judge_q2(){
        if((counter_x == 0 && counter_z == 1 && counter_h == 1 && counter_s == 0 && counter_st == 0 && counter_t == 0 && counter_tt == 0)||(counter_x == 1 && counter_z == 0 && counter_h == 1 && counter_s == 0 && counter_st == 0 && counter_t == 0 && counter_tt == 0)){
            correct();
            location.reload();
        }else{
            fault();
            location.reload();
        }
    }

    function judge_q3(){
        if((counter_x == 1 && counter_z == 0 && counter_h == 1 && counter_s == 0 && counter_st == 0 && counter_t == 0 && counter_tt == 1)||(counter_x == 0 && counter_z == 1 && counter_h == 1 && counter_s == 0 && counter_st == 0 && counter_t == 0 && counter_tt == 1)||(counter_x == 0 && counter_z == 0 && counter_h == 1 && counter_s == 1 && counter_st == 0 && counter_t == 1 && counter_tt == 0)){
            correct();
            location.reload();
        }else{
            fault();
            location.reload();
        }
    }

    document.getElementById('q1').onclick = function q1(){
        target.setFromAxisAngle(Axis["z"], Math.PI);
        target.multiply(quaternion.clone());  
        quaternion.copy(target); 
        number_q = 1;
    }

    document.getElementById('q2').onclick = function q2(){
        target.setFromAxisAngle(Axis["x"], -Math.PI/2);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        number_q = 2;
    }

    document.getElementById('q3').onclick = function q3(){
        target.setFromAxisAngle(Axis["x"], -Math.PI/2);
        target.multiply(quaternion.clone());  
        quaternion.copy(target);  
        target.setFromAxisAngle(Axis["y"], -Math.PI/4);
        target.multiply(quaternion.clone());  
        quaternion.copy(target); 
        number_q = 3;
    }
}
