'use  strict';

app.factory('User', function(DS) {
	
  /*
    create a User jsdata resource 
  */
  var User = DS.defineResource({
		basePath: '/api', 
    	idAttribute: '_id',
		name: "users"
		// ,
		// relations: {
		// 	hasMany: {
		// 		posts: {
		// 			localField: 'author',
		// 			foreignKey: '_id'
		// 		}
		// 	}
		// },

	});

  return User;

});


