var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1408157c-4938-4e13-86d0-ff45aadaa149","34e56b40-4392-4601-9eb7-c5eea11848b3","3081fa48-52c7-4c59-bb3e-7d4a7c50a3e1","3747440c-da8f-441f-b9c2-9b7b802f09c3","788178f8-9768-4ff4-9d21-2e9b3040a139","d0c5b402-f997-49bc-90ef-68dcc2e0d2bd","57273ff0-62f7-4067-a5d6-bd2f19a19085","c6c96272-1829-4fef-9555-ac96aaca7220","ad9c1cd8-4739-4952-b61c-e6fa79edbb4a","8e43d5ae-35ef-454d-ab8c-638f5e4f98f1","d00d3810-ad21-4c57-b796-d6c663e1cf53"],"propsByKey":{"1408157c-4938-4e13-86d0-ff45aadaa149":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":1,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"},"34e56b40-4392-4601-9eb7-c5eea11848b3":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png"},"3081fa48-52c7-4c59-bb3e-7d4a7c50a3e1":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":55,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":".TuVzslFKGWK2yyDtMYsjwx9Vecff6p8","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":55},"rootRelativePath":"assets/3081fa48-52c7-4c59-bb3e-7d4a7c50a3e1.png"},"3747440c-da8f-441f-b9c2-9b7b802f09c3":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":30,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"kWLl8w1q8Es0vavRbr2Lg58nBTbEn1F_","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":33},"rootRelativePath":"assets/3747440c-da8f-441f-b9c2-9b7b802f09c3.png"},"788178f8-9768-4ff4-9d21-2e9b3040a139":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"7MEQv1zNMNcdwT4HzP30b.piTjMBC3rv","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/788178f8-9768-4ff4-9d21-2e9b3040a139.png"},"d0c5b402-f997-49bc-90ef-68dcc2e0d2bd":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"JTGXYd9ngIT75FGn4c4vxmvFWzJAaegI","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/d0c5b402-f997-49bc-90ef-68dcc2e0d2bd.png"},"57273ff0-62f7-4067-a5d6-bd2f19a19085":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"Or5MVOAaSITKNKYICXTjaaqZ7znV3Pmf","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/57273ff0-62f7-4067-a5d6-bd2f19a19085.png"},"c6c96272-1829-4fef-9555-ac96aaca7220":{"name":"animation_6","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"aVADjETBE2f3JWMSq7xNVc8LG5GG5BPg","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/c6c96272-1829-4fef-9555-ac96aaca7220.png"},"ad9c1cd8-4739-4952-b61c-e6fa79edbb4a":{"name":"animation_7","sourceUrl":null,"frameSize":{"x":21,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"GATFBxAMjqoaHfkJwvTmYPsLzqiUbJ02","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":45},"rootRelativePath":"assets/ad9c1cd8-4739-4952-b61c-e6fa79edbb4a.png"},"8e43d5ae-35ef-454d-ab8c-638f5e4f98f1":{"name":"animation_8","sourceUrl":null,"frameSize":{"x":43,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"hdd0lsAuOF5SPBOoDwaKXx0YQp6Agwxu","loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":22},"rootRelativePath":"assets/8e43d5ae-35ef-454d-ab8c-638f5e4f98f1.png"},"d00d3810-ad21-4c57-b796-d6c663e1cf53":{"name":"animation_9","sourceUrl":null,"frameSize":{"x":39,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"icRt9cxEz5L__5iC6Kx47e0OJpOtEu9S","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":20},"rootRelativePath":"assets/d00d3810-ad21-4c57-b796-d6c663e1cf53.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create a thief
var thief = createSprite(275, 370, 15, 15);
thief.setAnimation("animation_2");

//create a police
var police = createSprite(50, 50, 50, 50);
police.setAnimation("animation_7");

//create walls
var wall1 = createSprite(200, 5, 400, 10);
var wall2 = createSprite(200, 395, 400, 10);
var wall3 = createSprite(5, 200, 10, 400);
var wall4 = createSprite(395, 200, 10, 400);
var wall5 = createSprite(50, 250, 10, 300);
var wall6 = createSprite(100, 50, 100, 10);
var wall7 = createSprite(75, 100, 60, 10);
var wall8 = createSprite(100, 175, 10, 160);
var wall9 = createSprite(150, 125, 10, 160);
var wall10 =  createSprite(100, 350, 10, 110);
var wall11 = createSprite(150, 350, 110, 10);
var wall12 = createSprite(175, 250, 160, 10);
var wall13 = createSprite(150, 275, 10, 60);
var wall14 = createSprite(200, 325, 10, 60);
var wall15 = createSprite(250, 350, 10, 110);
var wall16 = createSprite(200, 200, 110, 10);
var wall17 = createSprite(300, 300, 110, 10);
var wall18 = createSprite(350, 350, 110, 10);
var wall19 = createSprite(350, 175, 10, 260);
var wall20 = createSprite(250, 165, 10, 75);
var wall21 = createSprite(250, 125, 110, 10);
var wall22 = createSprite(200, 65, 10, 130);
var wall23 = createSprite(300, 50, 110, 10);
var wall24 = createSprite(300, 175, 10, 110);
var redDoor = createSprite(350, 375, 10, 60);
var blueDoor = createSprite(330, 375, 10, 60);
var greenDoor = createSprite(310, 375, 10, 60);

//create the key to open the lightgreen door
var key1 = createSprite(30, 370);
key1.setAnimation("animation_3");

//create the key to open the blue door
var key2 = createSprite(200, 160);
key2.setAnimation("animation_4");

//create the key to open the red door
var key3 = createSprite(75, 135);
key3.setAnimation("animation_5");

//velocity for police on horizontal direction
//police.velocityX = 2;

//create a laser to stop the not to touch the securitySystem2
var laser1 = createSprite(75, 345, 40, 3);

//create a laser to stop the not to touch the keys
var laser2 = createSprite(30, 310, 40, 3);
var laser3 = createSprite(75, 175, 40, 3);
var laser4 = createSprite(175, 115, 40, 3);

//create securitySystem1 to stop the laser1(when thief touches)
var securitySystem1 = createSprite(290, 70, 20, 20);
securitySystem1.setAnimation("animation_8");

//create securitySystem2 to stop the laser2,3,4(when thief touches)
var securitySystem2 = createSprite(75, 370, 20, 20);
securitySystem2.setAnimation("animation_8");

//create no. of lives
var lives = 5;

var gameState = "serve";

function draw() {

/////////////////////////////////////////////////////////////////////////////
  //create background
  background(rgb(0, 0, 0));
  
  //create no. of lives
  fill("yellow");
  text("lives:"+lives, 215, 220);
  
  //create diamond and fill it with yellow colour
  fill("gold");
  shape(380, 390, 390, 370, 385, 365, 375, 365, 370, 370, 380, 390);
  
  //create text to identify the keys
  fill("red");
  text("red", 20, 335);
  fill("blue");
  text("blue", 180, 185);
  fill("lightgreen");
  text("lightgreen", 55, 160);
  
  //create colour for lasers
  laser1.shapeColor = "red";
  laser2.shapeColor = "red";
  laser3.shapeColor = "red";
  laser4.shapeColor = "red";
  
  //create colour for walls
  wall1.shapeColor = "green";
  wall2.shapeColor=  "green";
  wall3.shapeColor = "green";
  wall4.shapeColor = "green";
  wall5.shapeColor = "green";
  wall6.shapeColor = "green";
  wall7.shapeColor = "green";
  wall8.shapeColor = "green";
  wall9.shapeColor = "green";
  wall10.shapeColor = "green";
  wall11.shapeColor = "green";
  wall12.shapeColor = "green";
  wall13.shapeColor = "green";
  wall14.shapeColor = "green";
  wall15.shapeColor = "green";
  wall16.shapeColor = "green";
  wall17.shapeColor = "green";
  wall18.shapeColor = "green";
  wall19.shapeColor = "green";
  wall20.shapeColor = "green";
  wall21.shapeColor = "green";
  wall22.shapeColor = "green";
  wall23.shapeColor = "green";
  wall24.shapeColor = "green";
  
  //create colour for doors
  redDoor.shapeColor = "red";
  blueDoor.shapeColor = "blue";
  greenDoor.shapeColor = "lightgreen";

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
if(gameState === "play"){
  //when you pressed up,thief moves in upward direction with velocity'4'
  if (keyDown("up")) {
    thief.y = thief.y-4;
    
  }
  
  //when you pressed down,thief moves in downward direction with velocity'4'
  if (keyDown("down")) {
    thief.y = thief.y+4;
    
  }
  //when you pressed left,thief moves in leftward direction with velocity'4'
  if (keyDown("left")) {
    thief.x = thief.x-4;
    
  }
  
  //when you pressed right,thief moves in rightward direction with velocity'4'
  if (keyDown("right")) {
    thief.x = thief.x+4;
    
  }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

  //when thief touches the key1, lightgreen door opens
  if (thief.isTouching(key1)) {
    redDoor.velocityY = 1;
    key1.x = 500;
    key1.y = 500;
  }
  
  //when thief touches the key2,blue door opens
  if (thief.isTouching(key2)) {
    blueDoor.velocityY = 1;
    key2.x = 600;
    key2.y = 600;
  }
  
  //when thief touches the key3, red door opens
  if (thief.isTouching(key3)) {
    greenDoor.velocityY = 1;
    key3.x = 700;
    key3.y = 700;
  }
  
  if(thief.x > 364 && thief.y > 364){
    thief.velocityX = 0;
    thief.velocityY = 0;
    police.velocityX = 0;
    gameState="won";
    
  }
  
  if(thief.isTouching(police)){
    
    playSound("assets/PoliceSirene.mp3");

    text("lives:", 215, 220);
    
    lives = lives-1; 
    
    reset();
    police.velocityX = 2;
    
    if(lives===0){
      gameState = "over";
    }
  
  }
  
  //when thief touches securitySystem1, laser1 disappears
  if (thief.isTouching(securitySystem1)) {
    securitySystem1.setAnimation("animation_9");
    laser1.x = 800;
    laser1.y = 800;
  }
  
  //when thief touches securitySystem2, laser2,3,4 disappears
  if (thief.isTouching(securitySystem2)) {
    securitySystem2.setAnimation("animation_9");
    
    laser2.x = 800;
    laser2.y = 800;
    
    laser3.x = 800;
    laser3.y = 800;
    
    laser4.x = 800;
    laser4.y = 800; 
  }

  if(gameState === "won"){
    fill("yellow");
    text("YOU WON THE GAME",145,235);
  }
  if(gameState === "over"){
    fill("yellow");
    text("Game Over. Press r to restart.",145,235);
    reset();
  }  
    
  if(keyDown("r") && gameState==="over"){
    gameState = "serve";
    lives = 5;
  }
  if (keyDown("space") && gameState==="serve") {
    reset();
    police.velocityX=2;
    gameState = "play";
  }
  if(gameState==="serve"){
    text("Press Space to Start", 140, 235);
  }
  //thief bounces from walls
  thief.bounceOff(wall1);
  thief.bounceOff(wall2);
  thief.bounceOff(wall3);
  thief.bounceOff(wall4);
  thief.bounceOff(wall5);
  thief.bounceOff(wall6);
  thief.bounceOff(wall7);
  thief.bounceOff(wall8);
  thief.bounceOff(wall9);
  thief.bounceOff(wall10);
  thief.bounceOff(wall11);
  thief.bounceOff(wall12);
  thief.bounceOff(wall13);
  thief.bounceOff(wall14);
  thief.bounceOff(wall15);
  thief.bounceOff(wall16);
  thief.bounceOff(wall17);
  thief.bounceOff(wall18);
  thief.bounceOff(wall19);
  thief.bounceOff(wall20);
  thief.bounceOff(wall21);
  thief.bounceOff(wall22);
  thief.bounceOff(wall23);
  thief.bounceOff(wall24);
  thief.bounceOff(redDoor);
  thief.bounceOff(blueDoor);
  thief.bounceOff(greenDoor);
  
  //thief from lasers
  thief.bounceOff(laser1);
  thief.bounceOff(laser2);
  thief.bounceOff(laser3);
  thief.bounceOff(laser4);
  
  //police bounces from wall19 and wall13
  police.bounceOff(wall19);
  police.bounceOff(wall13);
  
  //display sprites
  drawSprites();
}


function reset(){
  
    thief.x = 275;
    thief.y = 370;
    
    police.velocityX = 0;
    
    key1.x = 30;
    key1.y = 370;
    
    key2.x = 200;
    key2.y = 160;
    
    key3.x = 75;
    key3.y = 135;
    
    redDoor.x = 350;
    redDoor.y = 375;
    redDoor.velocityY = 0;
    
    blueDoor.x = 330;
    blueDoor.y = 375;
    blueDoor.velocityY = 0;
    
    greenDoor.x = 310;
    greenDoor.y = 375;
    greenDoor.velocityY = 0;
    
    securitySystem1.setAnimation("animation_8");
    securitySystem2.setAnimation("animation_8");
    
    laser1.x = 75;
    laser1.y = 345;
    
    laser2.x = 30;
    laser2.y = 310;
     
    laser3.x = 75;
    laser3.y = 175;
  
    laser4.x = 175;
    laser4.y = 115;
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
