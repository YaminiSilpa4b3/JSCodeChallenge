var app = angular.module('sortApp', []);
app.controller('codeCtrl', function($scope,$http) {
  $scope.sortType     = 'userId'; 
  $scope.sortReverse  = false;

  $scope.init = function () {
    loadData();
  };

  var loadData = function () {
    var url = "http://jsonplaceholder.typicode.com/posts";
    $http.get(url)
    .then(function(response) {
        $scope.tableData = response.data;
    });

    if($scope.tableData) {
      for(var i = 0; i < $scope.tableData.length ;i++){
        $scope.data = $scope.tableData[i];
      }
    }
  };
  $scope.init();
});