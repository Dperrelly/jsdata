'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			// RESOLVE!
			users: function(User){
				//console.log(User);
				return User.findAll();
			}
			,
			posts: function(Post){
				return Post.findAll();
			}
		}
	});
});

app.controller('MainController', function($scope, $state, users, posts) {
	//$state.go('signup');
	console.log(posts[0].authOr.username);
	$scope.allPosts = posts;
 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


