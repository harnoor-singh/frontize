// correspondingAppNames.ts

export type CorrespondingAppsType = {
  name: string;
  command: string;
};

export type CorrespondingAppsObjectType = {
  [appType: string]: CorrespondingAppNameType;
};

// projectTypes.ts
//
export type ProjectType =
  | {
      supported: 0;
      message: string;
    }
  | {
      supported: 1;
      appType: string;
    };

export type ProjectObjectType = {
  [inferedType: string]: ProjectType;
};
