'use strict';




app.factory('Post', function(DS, $state) {

	/*
		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users*/


	var Post = DS.defineResource({
		basePath: '/api', 
    	idAttribute: '_id',
		name: "posts",
		relations: {
			belongsTo: {
				users: {
					localField: 'authOr',
					localKey: 'author'
				}
			}
		},
		methods: {
			go: function(){
				$state.go('post', {postId: this._id});
			}
		}

	});

	/*

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/

    return Post;

}).run(function(Post) {});


