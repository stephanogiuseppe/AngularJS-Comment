angular.module("myApp").controller("commentController", function($scope) {
	/* Array of comments to examplify the test */
	$scope.comments = [
		{idPerson: 01, text: "Bonita foto!"},
		{idPerson: 02, text: "Parabéns."}
	];

	/* Function that deletes a comment */
	$scope.deleteComment = function(comment) {
		var indexComment = $scope.comments.indexOf(comment);
		$scope.comments.splice(indexComment, 1);
	};

	/* Function that add a comment */
	$scope.addComment = function(comment) {
		comment.idPerson = $scope.user.getId();
		$scope.comments.push(angular.copy(comment));
		delete $scope.comment;
		$scope.commentForm.$setPristine();
	};
});