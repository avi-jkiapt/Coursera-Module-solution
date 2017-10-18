(function(){
'use-strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject =['$scope'];

function LunchCheckController($scope){

$scope.name ="";
$scope.value =0;
$scope.messput= function(){
	var inValue= $scope.value;
	var mess="";

  if(inValue==0)//empty
{
  mess="Please enter data first";
}
else if(inValue<=3)//equals
{
  mess="Enjoy!";
}
else //greater
{
  mess="Too much!";
}

return mess;
};

$scope.TooCheck =function(){
  
var nameValue =$scope.name;
var arr=nameValue.split(",");
$scope.value=arr.length;

};

}


})();
