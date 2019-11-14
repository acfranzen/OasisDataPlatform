const express = require("express");
const router = express();

router.get("/", (req, res) => {
	res.send("Hello World");
});

router.listen(5000, function() {
	console.log(`We listening bro`);
});
