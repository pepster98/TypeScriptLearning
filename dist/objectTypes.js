let game = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
    price: 35,
};
let gameTwo = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
};
let games = [game, gameTwo];
for (const game of games) {
    console.log(game.price?.toString() ?? '0');
}
export {};
//# sourceMappingURL=objectTypes.js.map