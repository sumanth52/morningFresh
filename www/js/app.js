// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-toast'])

.run(function($ionicPlatform,$ionicHistory,$timeout) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
var notificationOpenedCallback = function(jsonData) {
     console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
   };  window.plugins.OneSignal.init("34290ed0-59cf-4b82-b541-fdf6defa8ffb",
     {googleProjectNumber: "289292876350"},
     notificationOpenedCallback);

    // Show an alert box if a notification comes in when the user is in your app.
    window.plugins.OneSignal.enableInAppAlertNotification(true);
    window.plugins.OneSignal.enableVibrate(true);

    if(typeof analytics !== undefined) {
      analytics.startTrackerWithId("UA-78141432-1");
      analytics.trackView("tracking the google analytics ");
      window.analytics.trackView('game3')
      window.analytics.trackView('game 2')
      window.analytics.trackView('game 1')
      window.analytics.trackView('game 4')
    }

  });
  var backbutton = 0;
	$ionicPlatform.registerBackButtonAction(function (event) {
     if ($ionicHistory.currentStateName() == 'home'){
		screen.unlockOrientation();
		screen.lockOrientation('portrait-primary');
		if(backbutton==0){
            backbutton++;
            window.plugins.toast.showShortBottom('Press back again to exit');
            $timeout(function(){backbutton=0;},3000);
        }else{
            navigator.app.exitApp();
        }
      }
	  else{screen.lockOrientation('portrait-primary'); history.go(-1);}

    }, 100);

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  .state('home', {
    url: '/home',
	templateUrl: 'templates/sample.html',
	controller: 'AccountCtrl'
  })
  .state('games', {
    url: '/games',
	templateUrl: 'templates/games.html',
	controller: 'homeCtrl'
  })
  .state('game1', {
    url: '/game1',
	templateUrl: 'templates/game1.html',
	controller: 'DashCtrl'
  })
  .state('game2', {
    url: '/game2',
	templateUrl: 'templates/game2.html',
	controller: 'game2Ctrl'
  })
  .state('game3', {
    url: '/game3',
	templateUrl: 'templates/game3.html',
	controller: 'headsUpCtrl'
  })
  .state('game4', {
    url: '/game4',
	templateUrl: 'templates/game4.html',
	controller: 'loaderCtrl'
  })
  .state('buyProduct', {
    url: '/buyProduct',
	templateUrl: 'templates/buyProduct.html',
	controller: 'AccountCtrl'
  })
;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
