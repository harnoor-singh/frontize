import { NextApiRequest, NextApiResponse } from "next";
import authors from "../../../../_data/authors.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (typeof slug === "string") {
    const allAuthorSlugs = Object.keys(authors);
    if (!allAuthorSlugs.includes(slug)) {
      return res.status(404).send("Not a valid author");
    }

    const authorData = (<any>authors)[slug];

    return res.status(200).json(authorData);
  } else {
    return res.status(404).send("Invalid request type");
  }
}
