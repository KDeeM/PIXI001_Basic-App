const sample = {};
const SPRITES = {};
// Add a variable to count the elapsed time
let elapsedTime = 0.0;

// Now an animation loop can be added to move our sprite, this loop is essential
// for animation of the objects in the view

function init() {
  createPixiApplication();
  addRocket();
  loadAssets().then(
    (val) => {
      console.log( PIXI.Loader.shared.resources );
      // let ball = new PIXI.Sprite.from(  PIXI.Loader.shared.resources.image1.texture.baseTexture );
      let ball = new PIXI.Sprite(  PIXI.Loader.shared.resources.image1.texture );
      let width = PIXI.Loader.shared.resources.image1.texture.baseTexture.width;
      let height = PIXI.Loader.shared.resources.image1.texture.baseTexture.height;

      ball.x = width;
      ball.y = height;
      ball.pivot.x = width / 2;
      ball.pivot.y = height / 2;
      ball.angle = 90;
      console.log(  PIXI.Loader.shared.resources.image1.texture.baseTexture.width );
      sample.app.stage.addChild( ball );
    }
  )

  // Tell the applications ticker to run a new callback every frame
  // we pass it delta, the amount of time that has passed between frames
  sample.app.ticker.add((delta) => {
    // increment the elapsed time by delta
    elapsedTime += delta;

    // update the sprite position
    SPRITES.spaceShip.x = 100 + Math.cos(elapsedTime / 50.0) * 100;
  });
  return;
}

function createPixiApplication() {
  // create a pixi application
  sample.app = new PIXI.Application({
    width: 640,
    height: 360,
  });
  // Add the generated view to the dom
  sample.parent = document.querySelector("#pixiContainer");
  sample.parent.appendChild(sample.app.view);
  return;
}

function loadAssets() {
  return new Promise(function( res, rej ){

    let loader = PIXI.Loader.shared;
    loader.add("image1", "image01.png");
    // .add( "image2", "image02.png" )
    // .add( "image3", "image03.png" );
    loader.load();

    console.log( "loading" );

    loader.onError.add(
      () => {
        return rej("failed");
      }
    )

    loader.onLoad.add(
      () => {
        return res("loaded");
      }
    )
  })
}

function addRocket() {
  SPRITES.spaceShip = PIXI.Sprite.from("spaceShip_original.png");
  sample.app.stage.addChild( SPRITES.spaceShip );
  return;
}

window.addEventListener("load", init);
