class Player {
    constructor(){
      this.distance=0;
      this.name=null;
      this.index=null;
      this.rank=null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance,
          
        });
        //console.log(this.name)
        
      }

      static getPlayerInfo(){
        var playerInfoRef=database.ref("players");
        playerInfoRef.on("value",(data)=>{
          allPlayers=data.val();

        })
        }
         getCarsAtEnd(){
           var getCars=database.ref("CarAtEnd");
           getCars.on("value",(data)=>{
             this.rank = data.val();
           })
          
         }
        // console.log(data.val());
         static updateCarsAtEnd(rank){

           database.ref("/").update({
             CarAtEnd:rank
           })
           }
         }
        
      
    
    