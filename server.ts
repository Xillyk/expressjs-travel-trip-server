import express from "express";
import tripRoute from "./routes/trip";
import cors from "cors";

const port = 9000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello Traveler!");
});

app.use("/trips", tripRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
