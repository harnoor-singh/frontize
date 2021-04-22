import * as fs from "fs";
import { detect } from "./detect";

const initialise = () => {
  const currDir = process.cwd();
  console.log(detect(currDir));
};

export { initialise };
