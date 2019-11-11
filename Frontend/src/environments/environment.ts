import { config } from '@ionic/core';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyBVRUKdL3ZfFMCJVa6S1JoCHSM_P3qV2D0",
  authDomain: "dbrecoleccion.firebaseapp.com",
  databaseURL: "https://dbrecoleccion.firebaseio.com",
  projectId: "dbrecoleccion",
  storageBucket: "dbrecoleccion.appspot.com",
  messagingSenderId: "824698223634",
  appId: "1:824698223634:web:1c6a0e8017b2e935996ccb",
  measurementId: "G-JSBB49E4MT"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
