import yargs from "yargs/yargs";
import path from "path";
import { initialise } from "./initialise";
import { remove } from "./remove";

const args = yargs(process.argv.slice(2))
  .usage("$0 <command> [options]")
  .scriptName("frontize")
  .command("init", "Initialise the specified directory for frontize.")
  .command("start", "Start the installed copy of frontize.")
  .command("remove", "Remove frontize from the specified directory.")
  .command("upgrade", "Upgrade frontize to the latest version.")
  .option("dir", {
    alias: "d",
    type: "string",
    description: "Describe the directory to be used.",
    default: ".",
  })
  .alias("h", "help")
  .alias("v", "version")
  .demandCommand(1, 1).argv;

let MAIN_CMD = args._[0];

process.chdir(path.join(process.cwd(), args.dir));

switch (MAIN_CMD) {
  case "init":
    initialise();
    break;

  case "remove":
    remove();
    break;

  default:
    console.log("Not implemented yet.");
    break;
}
