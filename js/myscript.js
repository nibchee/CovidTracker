const URL="https://covid19.mathdro.id/api";
let app=angular.module("MyApp",[])

app.controller('MyCtrl',($scope,$http)=>{
  //this is controller
  $scope.title="Stay Home Stay Safe";
  console.log("App Loaded");

  //calling api
   $http.get(URL).then(
    (response)=>{
       //sucess
       console.log(response.data)
       
       $scope.all_data=response.data;
     },(error)=>{
       //error
       console.log(error)
  });

//   $scope.changeValue=()=>{
//       $scope.title="This is home time";
//   }

//get country data

$scope.get_c_data=()=>{
  //console.log($scope.c);
  let country=$scope.c;
  if(country==''){
      $scope.c_data=undefined;
      return;
  }    

  $http.get(`${URL}/countries/${country}`)
  .then((response)=>{
     console.log(response.data)
     $scope.c_data=response.data
  },(error)=>{
      console.log(error);
  })
}

});