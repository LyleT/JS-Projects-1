const team = {
  _players: [
    { firstname: "Lyle", lastname: "Trethewey", age: 53 },
    {
      firstname: "Gillian",
      lastname: "Trethewey",
      age: 60,
    },
    {
      firstname: "Bella",
      lastname: "Trethewey",
      age: 14,
    },
  ],
  _games: [
    {
      opponent: "Gary",
      teamPoints: 10,
      opponentPoints: 7,
    },
    {
      opponent: "Natalie",
      teamPoints: 10,
      opponentPoints: 7,
    },
    {
      opponent: "Ann",
      teamPoints: 10,
      opponentPoints: 7,
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    return this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    return this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team.players);
console.log(team.games);
