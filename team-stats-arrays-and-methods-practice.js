const team = {
    _players: [
        {firstname: 'Tom', lastname: 'Smith', age: 22},
        {firstname: 'Rick', lastname: 'Grimes', age: 38},
        {firstname: 'Carl', lastname: 'Grimes', age: 18},
    ],
   _games: [
       {opponent: 'Bulldogs', teamPoints: 200, opponentPoints: 300},
       {opponent: 'Fuel', teamPoints: 120, opponentPoints: 400},
       {opponent: 'Water', teamPoints: 220, opponentPoints: 320},
   ], 
  
   get players () {
     return this._player;
     },
  
   get games () {
     return this._games;
   },
  
   addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      }
      this._players.push(player);
    },
  
    addGame (opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this._games.push(game);
    },
   }
  
  team.addPlayer('Joe', 'Mama', 30);
  team.addGame('Donkeys', 35, 200);
  
  console.log(team._games);
  console.log(team._players);