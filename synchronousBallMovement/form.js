class Form {
    constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset=createButton("Reset");
    this.greeting = createElement('h3');
    }
  
    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(displayWidth/2,0);
      
      //var input = createInput("Name");
     // var button = createButton('Play');
      
     this.input.position(displayWidth/2, 160);
     this.button.position(displayWidth/2, 200);
  this.reset.position(200,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
         player.name = this.input.value();
        
        playerCount+=1;
        player.index=playerCount;
        player.update()
        player.updateCount(playerCount);
        this.greeting = createElement('h3');
        this.greeting.html("Hello " + player.name )
        this.greeting.position(displayWidth/2, 160)
      });

      this.reset.mousePressed(()=>{
       player.updateCount(0);
       game.update(0);
  })
}
  }
  