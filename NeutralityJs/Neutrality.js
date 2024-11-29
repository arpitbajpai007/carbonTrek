angular.module('app', ['cfp.hotkeys', 'ngAnimate'])
	.controller('MainController', function($scope, hotkeys) {
    
    	// functions
    	$scope.active = 0;
    
		$scope.previous = function() {
            if($scope.active != 0) $scope.active -= 1;
        }    
        
    	$scope.next = function() {
            if($scope.active + 1 < $scope.forests.length) $scope.active += 1;
        }
        
    	$scope.setActive = function(i) {
            $scope.active = i;
        }
    	
    	$scope.forests = [
            {
                'rank' : 1,
            	'name' : 'Carbon Capture and Storage (CCS) Technologies',
                'desc' : 'CCS can capture carbon dioxide (CO2) emissions from coal mining and processing. By storing CO2 underground or using it for enhanced oil recovery, CCS can significantly reduce the carbon footprint of mining operations, making them more sustainable in the long run.',
                'img' : 'https://w.wallhaven.cc/full/ym/wallhaven-ymxdrd.png'
        	},
            {
                'rank' : 2,
            	'name' : 'Transition to Renewable Energy',
                'desc' : 'Coal mining operations can reduce their carbon footprints by switching to renewable energy sources, such as solar, wind, or hydropower, for electricity needs. This can dramatically reduce the greenhouse gas emissions from coal mine operations, especially for powering equipment and processing plants.',
                'img' : 'https://plus.unsplash.com/premium_photo-1661934660615-4918f28476f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        	},
            {
                'rank' : 3,
            	'name' : 'Reforestation and Land Restoration',
                'desc' : 'After coal mining operations, reforesting or restoring the mined areas helps absorb carbon from the atmosphere. Sustainable land management practices can turn mined lands into carbon sinks, balancing out some of the emissions produced during extraction.',
                'img' : 'https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        	},
            {
                'rank' : 4,
            	'name' : 'Improved Efficiency and Low-Carbon Technologies',
                'desc' : 'Enhancing the efficiency of mining operations can lower energy consumption and emissions. Adopting low-carbon mining technologies, such as electric-powered equipment and more efficient transportation systems, reduces the overall carbon footprint of the mining process.',
                'img' : 'https://images.pexels.com/photos/4090160/pexels-photo-4090160.jpeg?auto=compress&cs=tinysrgb&w=600'
        	},
            {
                'rank' : 5,
            	'name' : 'Compliance with Global Standards',
                'desc' : 'Aligning with global frameworks such as the Paris Agreement ensures coal mines meet regulatory standards while pursuing carbon neutrality. Regular audits and certifications build trust among stakeholders and demonstrate environmental responsibility.',
                'img' : 'https://w.wallhaven.cc/full/4d/wallhaven-4d8dvl.jpg'
        	}
        ];
    
    	// hot keys
    	hotkeys.add({
            combo: 'right',
            description: 'Next slide',
            callback: function() {
              $scope.next();
            }
        });
    	hotkeys.add({
            combo: 'left',
            description: 'Previous slide',
            callback: function() {
              $scope.previous();
            }
        });
	});