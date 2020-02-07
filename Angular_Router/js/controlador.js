/* ---------------------------------------------------------------------------------------------- */
/* DIRECTIVAS PERSONALIZADAS */
/* ---------------------------------------------------------------------------------------------- */

angular.module ('miApp', ['ngRoute'])
.service('formDatos', function(){
    this.dato = ''
    this.getDato = function(){
        return this.dato
    }
    this.setDato = function(dato){
        this.dato = dato
    }
})
.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/', {templateUrl: 'home.html'})
    .when('/contacto', {templateUrl: 'contacto.html',controller:'miCtrlContacto'})
    .when('/about', {templateUrl: 'about.html',controller:'miCtrlAbout'})
    .when('/configuracion', {templateUrl: 'configuracion.html',controller:'miCtrlConfiguracion'})
    .otherwise({templateUrl: 'home.html'})

    $locationProvider.html5Mode(true)
})
    
    .controller('miCtrl', function($scope){    
    })
    .controller('miCtrlContacto', function($scope,formDatos,$location){    
        $scope.info ='informacion de contacto'
        $scope.nuevoDato = ""
        $scope.enviar = function(dato){
            formDatos.setDato(dato)
            $location.path('/about')
        }
    })
    .controller('miCtrlAbout', function($scope,formDatos){    
        $scope.info ='informacion de About'
        $scope.datoDeContacto = formDatos.getDato()
    })
    .controller('miCtrlConfiguracion', function($scope){    
        $scope.info ='informacion de Configuracion'
    })

