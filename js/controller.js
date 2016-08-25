angular.module("app.controllers",[])
.controller("articleCtrl",["$scope","articleFac",function($scope,articleFac){
  $scope.data=articleFac.get();
  console.log($scope.data)
}])
.controller("projectCtrl",["$scope","projectFac",function($scope,projectFac){
  $scope.data=projectFac.get();
  console.log($scope.data)
}])
.controller("communityCtrl",["$scope","communityFac",function($scope,communityFac){
  $scope.data=communityFac.get();
  console.log($scope.data)
}])
.controller("publishCtrl",["$scope","publishFac",function($scope,publishFac){
  $scope.content="hello world"
  $scope.config = {
      themePath:"js/plugins/ueditor/themes/default",
      height:"300px"
  }
}])