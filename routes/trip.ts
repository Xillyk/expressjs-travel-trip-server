import { Request, Response, Router } from "express";
import TripsData from "../mock-trip.json";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const keyword = req.query.keyword?.trim();

  if (!keyword) {
    // * get all trips
    res.status(200).send({
      data: TripsData,
    });
  } else {
    // * get trip by keyword
    // ? better use elastic search for search engine
    const findData = TripsData.trips.filter(
      (trip) =>
        trip.title.includes(keyword) ||
        trip.description.includes(keyword) ||
        trip.tags.filter((tag) => tag.includes(keyword)).length > 0
    );

    res.status(200).send({
      data: findData,
    });
  }
});

export default router;
