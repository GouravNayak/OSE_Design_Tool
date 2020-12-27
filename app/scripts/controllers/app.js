// When defining a module with no module dependencies,
// the array of dependencies should be defined and empty.
    var design_Tool_App = angular.module('design_Tool_App', ['ngRoute']);
    

    
    // configure our routes
    design_Tool_App.config(['$routeProvider',function($routeProvider) {
        $routeProvider
			.when('/', {
			    templateUrl : 'views/home.html'
			})
            // route for the home page
            .when('/home', {
                templateUrl : 'views/home.html'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/aboutus.html'
            })

            // route for the visual inspection page
            .when('/visualinspection', {
                templateUrl : 'views/visualinspection.html'
            })
            
            // route for the choice reaction time page
            .when('/choicereactiontime', {
                templateUrl : 'views/choicereactiontime.html'
            })
            
            // route for the fitts tapping page
            .when('/fittstapping', {
                templateUrl : 'views/fittstapping.html'
            })
            
            // route for the simple reaction time page
            .when('/simplereactiontime', {
                templateUrl : 'views/simplereactiontime.html'
            })
            
            // route for the learning curve page
            .when('/learningcurve', {
                templateUrl : 'views/learningcurve.html'
            })
            
            // route for the short term memory span page
            .when('/shorttermmemoryspan', {
                templateUrl : 'views/shorttermmemoryspan.html'
            })
            
            // route for the short term memory span page
            .when('/strooptest', {
                templateUrl : 'views/strooptest.html'
            })
            
			.otherwise('/home');

    }]);
    
    // create the controller and inject Angular's $scope
    design_Tool_App.controller('mainController', function() {
        
    });

/*    design_Tool_App.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    design_Tool_App.controller('visualinspectionController', function($scope) {
        $scope.message = 'Look! I am visual inspection page.';
    });*/