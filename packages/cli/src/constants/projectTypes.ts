const projectTypes = {
  EXISTING: {
    response: 0,
    message:
      "Frontize already installed. Run 'npx frontize --help' for other possible actions.",
  },
  NO_PACKAGE_JSON: {
    response: 0,
    message:
      "No package.json found. Run this command inside the root of a valid project or specify it with the '-d' flag",
  },
};
