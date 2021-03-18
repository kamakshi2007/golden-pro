class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }
    setDirection(dir){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
            direction : dir
        });  
    }
    getDirection(pIndex){
        var playerIndex = "players/player" + pIndex;
        var playerdirectionRef = database.ref('playerIndex');
        var playerdirection;
        playerdirectionRef.on("value", (data) => {
            playerdirection = data.val();
        })
        return playerdirection;
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
