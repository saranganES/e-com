import { ACCESS_TOKEN_FIELD_NAME } from '@/constants/common';
import { Status, toastNotification } from '../Toaster';
import cookie from 'cookie';

function titleToSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '_') // Replace spaces with dashes
    .replace(/-+/g, '_'); // Replace consecutive dashes with a single dash
}

function checkResponse(status: number, message: string) {
  if (status) {
    toastNotification(Status.SUCCESS, message);
  } else {
    toastNotification(Status.ERROR, message);
  }
}

const parseJwt = (token: string = '') => {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
};

function separateNumberAndString(input: string) {
  // Use a regular expression to match the numeric part and the unit part
  const match = input.match(/^([\d.]+)([a-zA-Z]*)$/);

  if (match) {
    const numberPart = parseFloat(match[1]);
    const stringPart = match[2];

    return { numberPart, stringPart };
  }

  return null;
}

const validator = (value: any) => {
  return value ? value : '-';
};

const tokenToEmail = (reqCookie: any) => {
  const cookies = reqCookie ? cookie.parse(reqCookie) : {};
  const userCID: any = cookies[ACCESS_TOKEN_FIELD_NAME] || null;
  const userDetails = parseJwt(userCID);
  return userDetails.email;
};

export {
  titleToSlug,
  checkResponse,
  parseJwt,
  separateNumberAndString,
  validator,
  tokenToEmail,
};
