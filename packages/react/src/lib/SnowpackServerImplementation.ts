import { startServer, createConfiguration, SnowpackDevServer } from "snowpack";
import { join } from "path";

const SNOWPACK_PORT = 8080;

class SnowpackServerImplementation {
  server: SnowpackDevServer | null;
  constructor() {
    this.server = null;
  }

  async initialiseServer(root: string) {
    const config = createConfiguration({
      root,
      devOptions: {
        port: SNOWPACK_PORT,
      },
    });
    this.server = await startServer({ config, lockfile: null });
  }

  async getComponent(location: string) {
    let contents = null;
    if (this.server) {
      const pathToFile = this.server.getUrlForFile(
        join(process.cwd(), location)
      );
      if (!pathToFile) {
        return null;
      }
      const res = await this.server.loadUrl(pathToFile);
      if (res) {
        contents = res.contents.toString("utf8");
      }
      return contents;
    }
  }
}

export { SnowpackServerImplementation };
