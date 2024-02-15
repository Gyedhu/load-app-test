type Actions = {
  view: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
}

type PermissionConfigs = Record<string, {
  allowedPages: Record<string, Actions>;
  allowedForms: string[];
}>

export const permissionConfigs: PermissionConfigs = {
  ADMIN: {
    allowedPages: {
      "/home.dev": {
        view: true,
        create: true,
        update: true,
        delete: true,
      },
      "/requests.dev": {
        view: true,
        create: true,
        update: false,
        delete: false,
      },
      "/reports.dev": {
        view: true,
        create: true,
        update: false,
        delete: false,
      },
    },
    allowedForms: [],
  },
  STAFF: {
    allowedPages: {
      "/home.dev": {
        view: true,
        create: true,
        update: false,
        delete: false,
      },
      "/requests.dev": {
        view: true,
        create: true,
        update: false,
        delete: false,
      },
      "/reports.dev": {
        view: true,
        create: true,
        update: false,
        delete: false,
      },
    },
    allowedForms: [],
  },
  USER: {
    allowedPages: {
      "/home.dev": {
        view: true,
        create: false,
        update: false,
        delete: false,
      },
    },
    allowedForms: [],
  }
};

