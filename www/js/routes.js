angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('inicio', {
    url: '/inicio',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('construcciN', {
    url: '/construccion',
    templateUrl: 'templates/construcciN.html',
    controller: 'construcciNCtrl'
  })

  .state('agrCola', {
    url: '/agricola',
    templateUrl: 'templates/agrCola.html',
    controller: 'agrColaCtrl'
  })

  .state('manufactura', {
    url: '/manufactura',
    templateUrl: 'templates/manufactura.html',
    controller: 'manufacturaCtrl'
  })

  .state('bolsaDeTrabajo', {
    url: '/bolsa',
    templateUrl: 'templates/bolsaDeTrabajo.html',
    controller: 'bolsaDeTrabajoCtrl'
  })

  .state('equipo', {
    url: '/equipo',
    templateUrl: 'templates/equipo.html',
    controller: 'equipoCtrl'
  })

  .state('persona', {
    url: '/persona',
    templateUrl: 'templates/persona.html',
    controller: 'personaCtrl'
  })

  .state('refaccionesYComplementos', {
    url: '/refacciones',
    templateUrl: 'templates/refaccionesYComplementos.html',
    controller: 'refaccionesYComplementosCtrl'
  })

  .state('transporte', {
    url: '/transporte',
    templateUrl: 'templates/transporte.html',
    controller: 'transporteCtrl'
  })

$urlRouterProvider.otherwise('/inicio')



});
