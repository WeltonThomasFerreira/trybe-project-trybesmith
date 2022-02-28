import { CustomError } from 'ts-custom-error';

export class HttpError extends CustomError {
  public constructor(public code: number, message?: string) {
    super(message);
  }
}

export const USERNAME_IS_REQUIRED = new HttpError(400, 'Username is required');

export const USERNAME_MUST_BE_STRING = new HttpError(
  422,
  'Username must be a string',
);

export const USERNAME_MUST_BE_LONGER = new HttpError(
  422,
  'Username must be longer than 2 characters',
);

export const CLASSE_IS_REQUIRED = new HttpError(400, 'Classe is required');

export const CLASSE_MUST_BE_STRING = new HttpError(
  422,
  'Classe must be a string',
);

export const CLASSE_MUST_BE_LONGER = new HttpError(
  422,
  'Classe must be longer than 2 characters',
);

export const LEVEL_IS_REQUIRED = new HttpError(400, 'Level is required');

export const LEVEL_MUST_BE_NUMBER = new HttpError(
  422,
  'Level must be a number',
);

export const LEVEL_MUST_BE_GREATER = new HttpError(
  422,
  'Level must be greater than 0',
);

export const PASSWORD_IS_REQUIRED = new HttpError(400, 'Password is required');

export const PASSWORD_MUST_BE_STRING = new HttpError(
  422,
  'Password must be a string',
);

export const PASSWORD_MUST_BE_LONGER = new HttpError(
  422,
  'Password must be longer than 7 characters',
);
