// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    
      apiKey: "AIzaSyBN5l3057JpXRkpF7R_tzBYmOPU2Ibpq-o",
      authDomain: "redux-rxjs.firebaseapp.com",
      databaseURL: "https://redux-rxjs.firebaseio.com",
      projectId: "redux-rxjs",
      storageBucket: "redux-rxjs.appspot.com",
      messagingSenderId: "637267571037"  
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
