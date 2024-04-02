type Game = {                                       // type aliasing
    title: string;
    genres: string[];
    price?: number;                                 // optional property
}

let game: Game = {                                  // object
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
    price: 35,
}

let gameTwo: Game = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
}

let games: Game[] = [game, gameTwo];

for(const game of games){
    console.log(game.price?.toString() ?? '0');
}