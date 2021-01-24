// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    // Uncomment this when demoing:
    // apiKey: "AIzaSyBJ8_w4KjwSESwdTQcPs0ZvQsqgtERU8I0",
    // authDomain: "mcsv-firebase-service.firebaseapp.com",
    // databaseURL: "https://mcsv-firebase-service.firebaseio.com/",
    // projectId: "mcsv-firebase-service",
    // storageBucket: "mcsv-firebase-service.appspot.com",
    // messagingSenderId: "1029482459631",
    // appId: "1:1029482459631:web:f1d0a6d01a217dec62061a",
    // measurementId: "G-CJXF5B9CCG"

    //Firebase project for testing (using Roshan's acc)
    apiKey: "AIzaSyAZ1c6460cbEoY0NtHKI7kwDwPYwlWQev4",
    authDomain: "glasskat-ionic.firebaseapp.com",
    projectId: "glasskat-ionic",
    storageBucket: "glasskat-ionic.appspot.com",
    messagingSenderId: "663552944609",
    appId: "1:663552944609:web:44dc8b37a97a76bbae4aa0",
    measurementId: "G-NKX1C2V9FS"
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
