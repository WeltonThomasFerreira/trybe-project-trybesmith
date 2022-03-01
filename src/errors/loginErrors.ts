import HttpError from './httpError';

export const USERNAME_IS_REQUIRED = new HttpError(400, 'Username is required');

export const PASSWORD_IS_REQUIRED = new HttpError(400, 'Password is required');

export const LOGIN_IS_INVALID = new HttpError(
  401,
  'Username or password invalid',
);
