// Create a new pixi application
let app = new PIXI.Application({
  width: 640,
  height: 360,
});

// Add the generated view to the dom
let pixiView = document.querySelector( "#pixiContainer" );
pixiView.appendChild( app.view );

// Load a sprite to display in the view
let spr_spaceShip = PIXI.Sprite.from( "spaceShip_original.png" );

// add the sprite to the application stage
// the stage is a container serving as the root of the scene graph
// all children of the stage are rendered every frame
app.stage.addChild( spr_spaceShip );

// Now an animation loop can be added to move our sprite, this loop is essential
// for animation of the objects in the view

// Add a variable to count the elapsed time
let elapsedTime = 0.0;

// Tell the applications ticker to run a new callback every frame
// we pass it delta, the amount of time that has passed between frames
app.ticker.add(
  ( delta )=>{
    // increment the elapsed time by delta
    elapsedTime += delta;

    // update the sprite position
    spr_spaceShip.x = 100 + Math.cos( elapsedTime / 50.00 ) * 100;
  }
)