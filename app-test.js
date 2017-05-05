describe('Unit Testing: JS CODE CHALLENGE', function () {

   var scope, $controllerConstructor, $http;
   beforeEach(module('sortApp'));

   beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
       scope = $rootScope.$new();
       $controllerConstructor = $controller;
       httpBackend = $httpBackend;
       http = $http;
       httpBackend.when("GET", "http://jsonplaceholder.typicode.com/posts").respond(200, { id: 1 });
   }));

   	it('Should load the data on initialisation of the controller' ,function () {
   		$controllerConstructor('codeCtrl', { $scope: scope, $http: http });
   		var url = "http://jsonplaceholder.typicode.com/posts";
   		var data = [
			{
				"userId": 1,
				"id": 1,
				"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
			},
			{
				"userId": 1,
				"id": 2,
				"title": "qui est esse",
				"body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
			}
		];
			var responseObj = {then:function(callback){callback(data);}};
			var wrapperGetStub = sinon.stub(http, 'get');
			wrapperGetStub.returns(responseObj);
			scope.init();
			expect(wrapperGetStub.calledOnce).to.be.ok;
   	});

});