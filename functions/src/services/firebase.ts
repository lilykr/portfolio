import * as Admin from 'firebase-admin';
import * as functions from 'firebase-functions';

Admin.initializeApp(functions.config().firebase);
// eslint-disable-next-line import/prefer-default-export
export const firebase = {
  functions,
};
