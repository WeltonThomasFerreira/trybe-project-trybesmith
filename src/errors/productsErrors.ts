import { CustomError } from 'ts-custom-error';

export class HttpError extends CustomError {
  public constructor(public code: number, message?: string) {
    super(message);
  }
}

export const NAME_IS_REQUIRED = new HttpError(400, 'Name is required');

export const NAME_MUST_BE_STRING = new HttpError(
  422,
  'Name must be a string',
);

export const NAME_MUST_BE_LONGER = new HttpError(
  422,
  'Name must be longer than 2 characters',
);

export const AMOUNT_IS_REQUIRED = new HttpError(400, 'Amount is required');

export const AMOUNT_MUST_BE_STRING = new HttpError(
  422,
  'Amount must be a string',
);

export const AMOUNT_MUST_BE_LONGER = new HttpError(
  422,
  'Amount must be longer than 2 characters',
);
