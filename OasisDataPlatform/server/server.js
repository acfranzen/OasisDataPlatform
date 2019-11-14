const express = require("express");

const app = express();

const PORT = 8000;

app.get("/api", (req,res) => {
    const exampleData = {
            "youthServed":100,
            "PercentMale": 50,
            "PercentFemale":50
    };
    res.json(exampleData);
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))