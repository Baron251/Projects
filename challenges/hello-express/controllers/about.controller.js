const router = require("express").Router();

router.get("/bingus", (req, res) => {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
	<h2>Bingus</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/bingus">Bingus</a>
    <p class="infop">Bingus is a hairless Sphynx cat that originated from a video in which he is pet while staring at his owner. Attracting attention on Instagram in March 2020, Bingus’ popularity exploded in September after he appeared in a viral Reddit post, which later resulted in online users referring to all Sphynxes as "Bingus."</p>`);
});

router.get("/floppa", (req, res) => {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head><h2>Floppa</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/floppa">Floppa</a>
    <p class="infop">Big Floppa or simply Floppa refers to a series of ironic memes based on photographs of a caracal named Gregory, and sometimes photographs of other medium-sized cats. Originally circulated among ironic Instagram meme accounts starting in late December 2019, the meme gained more widespread popularity online starting in May 2020.</p>`
	);
});

router.get("/froge", (req, res) => {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head><h2>Froge</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/froge">Froge</a>
    <p class="infop">Mmmm Myes Pet Froge refers to a GIF caption of a frog being petted that inspired a series of similar GIF captions in early-to-mid 2020. A series of Twitch emotes known as PETTHE emotes depicting various subjects being petted began circulating in May 2020.</p>`);
});

module.exports = router;
