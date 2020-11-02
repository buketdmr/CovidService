import express from "express";
import bodyParser from "body-parser";
import covidDataRoutes from "./routes/covidData.js";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use("/covidData", covidDataRoutes);

app.get("/", (req, res) => {
  res.send("Hi Codid App");
});

app.listen(PORT, () =>
  console.log(`Server Running on port : http://localhost:${PORT}`)
);
