import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_KEY = "73a024ea0a324304a36140832230809"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    
    res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
    const location = req.body.location;
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    // const icon = await axios.get("https://www.weatherapi.com/docs/weather_conditions.json");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {result: result});
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});