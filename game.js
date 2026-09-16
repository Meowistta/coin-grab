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
