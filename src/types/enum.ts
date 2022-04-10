export enum ErrorCode {
  Unexpected_Error = 'Unexpected_Error',
  Network_Error = 'Network_Error',
}

export enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}

export enum MenuKey {
  HOME = 'Home',
  GROUP = 'Group',
  CREATE = 'Create',
  ASSET = 'Asset',
  MORE = 'More',
}

export const RoutePath = {
  LOGIN: '/login',
  SIGNUP: '/sign-up',
  HOME: '/home',
  GROUP: '/group',
  CREATE: '/create',
  ASSET: '/asset',
  MORE: '/more',
  NOTIFICATION: '/notification',
  SOURCE: '/source',
  CREATE_SOURCE: '/source/create',
  EDIT_SOURCE: '/source/:id',
};

export enum LoginSocialType {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
}

export enum CommonStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}
