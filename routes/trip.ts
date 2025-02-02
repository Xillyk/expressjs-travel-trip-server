import { Request, Response, Router } from "express";

const router = Router();

// * get all trips
router.get("/", (_, res: Response) => {
  res.send({
    data: "all trips",
  });
});

// * get trip by keyword
router.get("/:keyword", (req: Request, res: Response) => {
  console.log(req.params);
  res.send({
    data: req.params,
  });
});

export default router;
