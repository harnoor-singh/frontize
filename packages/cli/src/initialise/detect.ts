import { projectTypes } from "../constants/projectTypes";
import { isFrontize } from "./isFrontize";
import { readPackageJson } from "./packageJson";

const detect = (dir: string) => {
  if (isFrontize(dir)) {
    return projectTypes.EXISTING;
  }

  const packageJson = readPackageJson(dir);
  if (!packageJson) return projectTypes.NO_PACKAGE_JSON;

  const dependencies = Object.keys(packageJson.dependencies || {});

  if (!dependencies) {
    return projectTypes.INVALID_PACKAGE_JSON;
  } else if (!dependencies.includes("react")) {
    return projectTypes.NO_REACT;
  } else if (dependencies.includes("react-native")) {
    return projectTypes.REACT_NATIVE;
  } else if (dependencies.includes("next") || dependencies.includes("gatsby")) {
    return projectTypes.UNSUPPORTED_FRAMEWORK;
  } else if (dependencies.includes("react-dom")) {
    return projectTypes.BASIC_REACT;
  }

  return projectTypes.UNDETECTED;
};

export { detect };
