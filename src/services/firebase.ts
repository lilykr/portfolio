import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
  CACHE_SIZE_UNLIMITED,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseProdConfig: FirebaseOptions = {
  projectId: 'portfolio-ba4e2',
  messagingSenderId: '1498377983',
  apiKey: 'AIzaSyBx3T2rkLOJze6mXw_0aYP3cGd4f1ADkpU',
  authDomain: 'portfolio-ba4e2.firebaseapp.com',
};

export const app = initializeApp(firebaseProdConfig);
export const firestore = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED,
  }),
});

export const functions = getFunctions(app);

export const firebase = {
  app,
  firestore,
  functions,
};
