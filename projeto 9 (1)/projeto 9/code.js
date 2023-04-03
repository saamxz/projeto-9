var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3fd11ead-10a7-4e1f-afbd-c09c9bae23aa","937b81b5-7a69-442f-a59c-8ee6ed2fa0c1","0f5225c9-3a4d-4deb-bbfd-f22fb5ce4783","a0f99dd0-4042-4761-a0ba-f816dbf61a7e","146f1666-b82f-4733-8ea7-ed89e856e9b1"],"propsByKey":{"3fd11ead-10a7-4e1f-afbd-c09c9bae23aa":{"name":"heroi.1","sourceUrl":"assets/api/v1/animation-library/gamelab/CxA8ktK5EbiEj1DPMgO9nyxT0U0TebgK/category_faces/kidportrait_15.png","frameSize":{"x":284,"y":353},"frameCount":1,"looping":true,"frameDelay":2,"version":"CxA8ktK5EbiEj1DPMgO9nyxT0U0TebgK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":353},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CxA8ktK5EbiEj1DPMgO9nyxT0U0TebgK/category_faces/kidportrait_15.png"},"937b81b5-7a69-442f-a59c-8ee6ed2fa0c1":{"name":"enemy.1","sourceUrl":"assets/api/v1/animation-library/gamelab/8H.vuDHZpn6sWS8S6oJAvrCUVGJ4UFvE/category_fantasy/monster_21.png","frameSize":{"x":249,"y":373},"frameCount":1,"looping":true,"frameDelay":2,"version":"8H.vuDHZpn6sWS8S6oJAvrCUVGJ4UFvE","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":373},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8H.vuDHZpn6sWS8S6oJAvrCUVGJ4UFvE/category_fantasy/monster_21.png"},"0f5225c9-3a4d-4deb-bbfd-f22fb5ce4783":{"name":"enemy.2","sourceUrl":"assets/api/v1/animation-library/gamelab/sbHblZVG76lVwv_v9hNs_iyDImtykKTh/category_fantasy/monster_07.png","frameSize":{"x":339,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"sbHblZVG76lVwv_v9hNs_iyDImtykKTh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":339,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sbHblZVG76lVwv_v9hNs_iyDImtykKTh/category_fantasy/monster_07.png"},"a0f99dd0-4042-4761-a0ba-f816dbf61a7e":{"name":"enemy.3","sourceUrl":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png","frameSize":{"x":248,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png"},"146f1666-b82f-4733-8ea7-ed89e856e9b1":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Iniwjg2LkdYOKciItYOH.FbJcQCgPi42","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png"}}};
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

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("heroi.1");
hero.scale=.2;
enemy1.setAnimation("enemy.1");
enemy1.scale=.1;
enemy2.setAnimation("enemy.2");
enemy2.scale=.1;
enemy3.setAnimation("enemy.3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_music/birthday_kazoo_negative_game_cue_1.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("black")
  text("mortes:"+death,20,350);
  
drawSprites()
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
