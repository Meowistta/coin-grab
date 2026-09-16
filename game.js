// Create our only scene called mainScene, in the game.js file
// 在js文件建立一个主场景
class mainScene {
  // The three methods currently empty
  
  preload() {
    // This method is called once at the beginning 这个方法在开始时调用
    // It will load all the assets, like sprites and sounds  预加载声音，贴图件等
    
  }
  create() {
    // This method is called once, just after preload() 仅在预加载之后进行单次调用
    // It will initialize our scene, like the positions of the sprites 初始化场景，比如贴图件等的位置
  }
  update() {
    // This method is called 60 times per second after create()  创建完之后每秒60次调用
    // It will handle all the game's logic, like movements 它掌管游戏所有逻辑，比如移动。
  }
}
new Phaser.Game({
  width: 700, // Width of the game in pixels 游戏像素宽度
  height: 400, // Height of the game in pixels  游戏像素高度
  backgroundColor: '#3498db', // The background color (blue)  背景色
  scene: mainScene, // The name of the scene we created  场景名称
  physics: { default: 'arcade' }, // The physics engine to use   物理引擎
  parent: 'game', // Create the game inside the <div id="game">  game挂载节点
});
