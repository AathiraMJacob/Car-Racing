class Game{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      start(){
        if(gameState === 0){
          player = new Player();
          player.getCount();
          form = new Form()
          form.display();
        }
      }
      play(){
        form.hide();
        textSize(15);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if (allPlayers!==undefined){
          var displaypos=130;
          for(var plr in allPlayers){
            if(plr==="player"+player.index){
              fill("red");
            }else{
              fill("black");
            }
          
          displaypos +=20;
          textSize(10);
          text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displaypos);
        }
      }
      if (keyIsDown(UP_ARROW)&& player.index!= null){
        player.distance+=50;
        player.update();
      }

      }
}
