import { NextApiRequest, NextApiResponse } from "next";
import { getAuthorBySlug } from "../../../apis/authors";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (typeof slug === "string") {
    const postData = getAuthorBySlug(slug);
    res.status(200).json(postData);
  } else {
    res.status(404).send("Invalid request type");
  }
}
