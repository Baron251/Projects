// ! Go into package.json and change main to whatever this file is named.
const express = require("express");

const app = express();

const PORT = 4000;

const aboutController = require("./controllers/about.controller");

const memeController = require("./controllers/meme.controller");

app.use(express.static(`${__dirname}/public`));
console.log("pathway: ", __dirname);


app.use("/about", aboutController);

app.use("/meme", memeController);

app.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
});
