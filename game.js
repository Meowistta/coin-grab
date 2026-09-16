// Create our only scene called mainScene, in the game.js file
// 在js文件建立一个主场景
class mainScene {
  // The three methods currently empty
  
  preload() {
    // This method is called once at the beginning 这个方法在开始时调用
    // It will load all the assets, like sprites and sounds  预加载声音，贴图件等
    // Step 1, load the sprite. Since we are loading an asset, we have to do it in the preload() method.
    // 第一步，加载贴图。在预加载里面做这件事。
    // Parameters: name of the sprite, path of the image 参数：贴图名字和路径。
    this.load.image('player', 'assets/player.png');
    this.load.image('coin', 'assets/coin.png');
  } 
  
  create() {
    // This method is called once, just after preload() 仅在预加载之后进行单次调用
    // It will initialize our scene, like the positions of the sprites 初始化场景，比如贴图件等的位置
    // Step 2, display the sprite on the screen. This is part of the initialization of the scene, so we do that in the create() method.
    // 第二步，把贴图贴到屏幕上，这是场景初始化，因此在创建场景方法中做这个。
    // Parameters: x position, y position, name of the sprite
    this.player = this.physics.add.sprite(100, 100, 'player');
    this.coin = this.physics.add.sprite(300, 300, 'coin');
    // 第三步，分数文字给它搞起来
    // Store the score in a variable, initialized at 0 分数存进一个变量，初始化为0
    this.score = 0;

    // The style of the text 文本风格
    // A lot of options are available, these are the most important ones 这是最重要的文本格式化选项
    let style = { font: '20px Arial', fill: '#fff' };

    // Display the score in the top left corner 分数放在左上角
    // Parameters: x position, y position, text, style 参数：x，y 文字，风格
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    // 案件对象处理
    this.arrow = this.input.keyboard.createCursorKeys();
    // 补间动画
    // Create a new tween 
    this.tweens.add({
      targets: this.player, // on the player 在主角上
      duration: 200, // for 200ms 
      scaleX: 1.2, // that scale vertically by 20% 水平20%
      scaleY: 1.2, // and scale horizontally by 20%  垂直20%
      yoyo: true, // at the end, go back to original scale  最后回去
    });
  }
  
  update() {
    // This method is called 60 times per second after create()  创建完之后每秒60次调用
    // It will handle all the game's logic, like movements 它掌管游戏所有逻辑，比如移动。
    
    // 处理四个方向键
    // Handle horizontal movements
    if (this.arrow.right.isDown) {
      // If the right arrow is pressed, move to the right
      this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      // If the left arrow is pressed, move to the left
      this.player.x -= 3;
    } 

    // Do the same for vertical movements
    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    } 
    
    // If the player is overlapping with the coin
    //  如果创上硬币了
    if (this.physics.overlap(this.player, this.coin)) {
      // Call the new hit() method 调用命中方法
      this.hit();
    }
  }
  
  //检测碰撞。
  hit() {
    //随机移动硬币。
    // Change the position x and y of the coin randomly
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);
    // 计分
    // Increment the score by 10
    this.score += 10;
    // 更改计分板
    // Display the updated score on the screen
    this.scoreText.setText('score: ' + this.score);
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
