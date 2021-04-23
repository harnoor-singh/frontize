const projectTypes = {
  EXISTING: {
    supported: 0,
    message:
      "Frontize already installed. Run 'npx frontize --help' for other possible actions.",
  },
  NO_PACKAGE_JSON: {
    supported: 0,
    message:
      "No package.json found. Run this command inside the root of a valid project or specify it with the '-d' flag",
  },
  INVALID_PACKAGE_JSON: {
    supported: 0,
    message:
      "The package.json file is either corrupted, or has no 'dependencies' field.",
  },
  NO_REACT: {
    supported: 0,
    message: "The project does not have react installed!",
  },
  REACT_NATIVE: {
    supported: 0,
    message: "React native is not supported yet!",
  },
  UNDETECTED: {
    supported: 0,
    message: "Could not determine the type of the project.",
  },
  UNSUPPORTED_FRAMEWORK: {
    supported: 0,
    message: "Next.js, gatsby, or other frameworks are not supported yet.",
  },
  BASIC_REACT: {
    supported: 1,
    message: "",
  },
};

export { projectTypes };
