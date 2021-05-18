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
  }

  if (dependencies.includes("react")) {
    if (dependencies.includes("react-native")) {
      return projectTypes.REACT_NATIVE;
    } else if (dependencies.includes("react-dom")) {
      return projectTypes.BASIC_REACT;
    } else {
      return projectTypes.UNSUPPORTED_FRAMEWORK;
    }
  }

  return projectTypes.UNDETECTED;
};

export { detect };
