import express from "express";
import tripRoute from "./routes/trip";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello Traveler!");
});

app.use("/trips", tripRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
