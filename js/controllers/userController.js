angular.module("myApp").controller("userController", function($scope) {
	/* Array of people (users) - to examplify the test */
	$scope.people = [
		{id: 01, name: "User1", username: "user1", password: "user1"},
		{id: 02, name: "User2", username: "user2", password: "user2"},
		{id: 03, name: "User3", username: "user3", password: "user3"}
	];

	/* Simulation of object "user"  */
	$scope.user = {
		id: 0,
		getId: function() {
			return this.id;
		},
		setId: function(id) {
			this.id = id;
		},
		username: "",
		getUsername: function() {
			return this.username;
		},
		setUsername: function(username) {
			this.username = username;
		},
		name: "",
		getName: function() {
			return this.name;
		},
		setName: function(name) {
			this.name = name;
		}
	};

	/* Simulation of object "login"  */
	$scope.loginStatus = {
		state: false,
		getState: function() {
			return this.state;
		},
		setState: function(state) {
			this.state = state;
		},
		error: false,
		getError: function() {
			return this.error;
		},
		setError: function(error) {
			this.error = error;
		}
	};

	/* Function that validates a user */
	$scope.validateUser = function(person) {
		if(person != undefined)
			for(var i = 0; i < $scope.people.length; i++) {
				$scope.people[i].username === person.username && 
				$scope.people[i].password === person.password ? 
				$scope.loginUser($scope.people[i]) : $scope.loginStatus.setError(true);
			}
	};

	/* Function that logs a user */
	$scope.loginUser = function(person) {
		$scope.user.setId(person.id);
		$scope.user.setUsername(person.username);
		$scope.user.setName(person.name);
		$scope.loginStatus.setState(true);
		$scope.hideLoginForm();
	};

	/* Function that logout a user */
	$scope.logoutUser = function() {
		delete $scope.person;
		$scope.loginStatus.setState(false);
		$scope.loginStatus.setError(false);
	};

	/* Function that verify if a user can have permission */
	$scope.allowedUser = function(comment) {
		return comment.idPerson === $scope.user.getId();
	};

	/* Function that return the name of user logged */
	$scope.getNameOfUser = function() {
		return $scope.user.getName();
	};

	/* Function that show the login form */
	$scope.showLoginForm = function() {
		angular.element('#myModal').css('display', 'block');
	};

	/* Function that hide the login form */
	$scope.hideLoginForm = function() {
		angular.element('#myModal').css('display', 'none');
	};
});