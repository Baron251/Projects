const router = require("express").Router();

router.get("/bingus", (req, res) => {
	res.send(` 
    <head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
    <h1>This is the Bingus page</h1>
    <a href="http://localhost:4000/">Home</a>
    <a href="http://localhost:4000/about/bingus">About Bingus</a><br>
    <div class="bingus">
    <img src="https://staticg.sportskeeda.com/editor/2021/08/14b05-16281696306770-800.jpg" width = "480" alt="Hi Bingus">
</div>
    <p>This is Bingus. Please say hi to Bingus. He is special kitty <br>Hi Bingus</p>`);
});

router.get("/floppa", (req, res) => {
	res.send(`
    <head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
    <h1>This is the Floppa page</h1>
    <a href="http://localhost:4000/">Home</a>
    <a href="http://localhost:4000/about/floppa">About Floppa</a>
    <img src="https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg" alt="Big Floppa">
    <p>Floppa a little chunky</p>
    <p>He take up the whole dang page and a lil' EXTRA</p>`);
});

router.get("/froge", (req, res) => {
	res.send(`
    <head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
    <h1>This is the Froge page</h1>
    <a href="http://localhost:4000/">Home</a>
    <a href="http://localhost:4000/about/froge">About Froge</a>
    <p>This is Froge. He is round boy. Please pet him.</p>
    <div class="container">
    <img src="https://i.kym-cdn.com/photos/images/newsfeed/001/866/980/14d.gif" alt="mmmm-myes-pet-froge">
  </div>
    <p>Don't forget to pet him</p>`);
});



module.exports = router;
