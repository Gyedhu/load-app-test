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
      "/home": {
        view: true,
        create: true,
        update: true,
        delete: true,
      },
      "/test.x/users.dev": {
        view: true,
        create: true,
        update: true,
        delete: true,
      }
    },
    allowedForms: [],
  },
  STAFF: {
    allowedPages: {
      home: {
        view: true,
        create: true,
        update: false,
        delete: false,
      }
    },
    allowedForms: [],
  },
  USER: {
    allowedPages: {
      home: {
        view: true,
        create: false,
        update: false,
        delete: false,
      },
    },
    allowedForms: [],
  }
};

