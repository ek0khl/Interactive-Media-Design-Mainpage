//========= 파티클 불러오기 ==========
let mi;
let ind;
let cap;
//========= 모델링 불러오기 ==========
let ribbon;
let angle = 0; //파티클 회전
//========= 배경 불러오기 ===========
let logo; //한국공학대학교 로고
let sky; //배경
let rx = 0; //배경
let ry = 0; //배경

function preload() {
  ribbon = loadModel('ribbon.obj'); //모델 파일 불러오기
  mi = loadModel('mi.obj'); //모델 파일 불러오기
  ind = loadModel('in.obj'); //모델 파일 불러오기
  cap = loadModel('cap.obj'); //모델 파일 불러오기
  logo = loadModel('logo.obj') //모델 파일 불러오기
  logo2 = loadModel('logo2.obj') //모델 파일 불러오기
}

function setup() {
//========= 파티클 설정 ===========
  x=[]; y=[]; d=10;
  xstep=[]; ystep=[]
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (i=0;i<5;i++){
    x[i]=random(-windowWidth/4,windowWidth/4)
    y[i]=random(-windowHeight/4,windowHeight/4)
    xstep[i]=random(-0.1,1)
    ystep[i]=random(-0.1,1)
  }
  sky = loadImage("sky.png"); //사진 파일 불러오기
  // console.log(text); 리스트 확인용
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  //========= 배경 설정 ==========
  push();
  texture(sky);
  rotateX(ry*2);
  rotateY(rx*2);
  if (!mouseIsPressed) rx -= 0.001;
  sphere(min(width, height)*4, 60, 40);
  pop();
  
  //========= 카메라 설정 ==========
  translate(0, 0, 0); //3D 가상 카메라의 시작점 위치 이동 (x, y, z)
  
  //========= 빛 설정 ==========
  const lightDir = createVector(map(mouseX, 0, width, 2, -2), map(mouseY, 0, height, 2, -2), -1);
  lightDir.normalize();
  ambientLight(100);
  directionalLight(255, 191, 127, lightDir);
  
  //========= 모델링 형상 ==========
  noStroke();
  directionalLight(255, 0, 0, -1, 0, 0);
  directionalLight(0, 255, 0, 0, -1, 0);
  directionalLight(0, 0, 255, 0, 0, -1);

  //========= 로고 스타일 설정 ==========
  push();
  translate(-windowWidth/2+200, -windowHeight/2+50, 0);
  ambientLight(255);
  noStroke();
  scale(1);
  rotateX(2.95);
  model(logo);
  pop();
  
  //========= 로고2 스타일 설정 ==========
  push();
  translate(-windowWidth/2+620, windowHeight/2-100, 100);
  ambientLight(255);
  noStroke();
  scale(7);
  rotateX(1.55);
  model(logo2);
  pop();

  //========= 리본1(ribbon1) 스타일 설정 ==========
  push();
  translate(500, -400, -300);
  scale(30);
  rotateZ(sin(frameCount * 0.02) / 2 + PI/4);
  rotateY(sin(frameCount * 0.02) / 2 + PI/4);
  model(ribbon);
  pop();
  
  //========= 리본2(ribbon2) 스타일 설정 ==========
  push();
  translate(-300, 500, 40);
  scale(20);
  rotateZ(PI);
  rotateY(sin(frameCount * 0.01) / 2 + PI/2);
  model(ribbon);
  pop();
  
  //========= 리본3(ribbon3) 스타일 설정 ==========
  push();
  translate(800, 600, -200);
  scale(80);
  rotateZ(sin(frameCount * 0.01) / 2 + PI/2);
  rotateY(sin(frameCount * 0.01) / 2 + PI/1);
  model(ribbon);
  pop();
  
  //========= 리본4(ribbon4) 스타일 설정 ==========
  push();
  translate(-1400, -800, -1200);
  scale(40);
  rotateZ(sin(frameCount * 0.01) / 2 + PI/4);
  rotateY(PI);
  model(ribbon);
  pop();

  //========= 리본5(ribbon5) 스타일 설정 ==========
  push();
  translate(-900, 200, -600);
  scale(100);
  rotateZ(sin(frameCount * 0.01) / 2 + PI/4);
  rotateY(PI);
  model(ribbon);
  pop();
  
  //========= 리본6(ribbon6) 스타일 설정 ==========
  push();
  translate(1200, -1500, -1400);
  scale(200);
  rotateZ(sin(frameCount * 0.01) / 4 + PI/2);
  rotateY(sin(frameCount * 0.01) / 4 + PI/2);
  model(ribbon);
  pop();

  //========= 미디어디자인 파티클(Media) 스타일 설정 ==========
  for (i=0;i<5;i++) {
    x[i]=x[i]+xstep[i]
    y[i]=y[i]+ystep[i]
    if (x[i]>windowWidth/2) {xstep[i]=-xstep[i]}
    if (x[i]<-windowWidth/2) {xstep[i]=-xstep[i]}
    if (y[i]>-windowHeight/2) {ystep[i]=-ystep[i]}
    if (y[i]<windowHeight/2) {ystep[i]=-ystep[i]}
    
    push();
    translate(x[i],y[i]);
    fill(116,245,210);
    rotateX(angle);
    rotateZ(angle * 0.005);
    rotateY(angle * 0.02);
    angle += 0.001
    scale(d);
    model(mi);
    pop();
}
  
//   //========= 산업 디자인 파티클(ind) 스타일 설정 ==========
  for (i=0;i<5;i++) {
    x[i]=x[i]+xstep[i]
    y[i]=y[i]+ystep[i]
    if (x[i]>windowWidth/2) {xstep[i]=-xstep[i]}
    if (x[i]<-windowWidth/2) {xstep[i]=-xstep[i]}
    if (y[i]>-windowHeight/2) {ystep[i]=-ystep[i]}
    if (y[i]<windowHeight/2) {ystep[i]=-ystep[i]}
    
    push();
    translate(-x[i],-y[i]);
    fill(255,139,110);
    rotateX(angle);
    rotateZ(angle * 0.01);
    rotateY(angle * 0.02);
    angle += 0.001
    scale(d);
    model(ind);
    pop();
}
  
  
//   //========= 캡스톤 디자인 파티클(cap) 스타일 설정 ==========
  for (i=0;i<5;i++) {
    x[i]=x[i]+xstep[i]
    y[i]=y[i]+ystep[i]
    if (x[i]>windowWidth/2) {xstep[i]=-xstep[i]}
    if (x[i]<-windowWidth/2) {xstep[i]=-xstep[i]}
    if (y[i]>-windowHeight/2) {ystep[i]=-ystep[i]}
    if (y[i]<windowHeight/2) {ystep[i]=-ystep[i]}
    
    push();
    translate(x[i],y[i], -500);
    fill(136,82,227);
    rotateX(angle);
    rotateZ(angle * 0.03);
    rotateY(angle * 0.06);
    angle += 0.001
    noStroke();
    scale(d);
    model(cap);
    pop();
}
}
function mousePressed() {
    location.reload();
    location.href='https://editor.p5js.org/s_jiyeon/full/aTn1WBEXf';
}