// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": "https://firebasestorage.googleapis.com/v0/b/flip-il.appspot.com/o/test%2Fjquery.min.js?alt=media"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
