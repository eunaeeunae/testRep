// Code goes here

(function(){
  var app = angular.module('todo',[]);//module def cf)array
  
  // module is big container
  // controller
  
  app.controller('TodoCtrl',['$scope',function($scope){//controller def
  //controlloer 에서 두번째 파라미터는 배열로
  //scope 파라미터 주입 필수
    $scope.todos =[{
      title:'Yoga Practice',
      completed:false,
      createdAt:Date.now()      
    },{
      title:'angular Practice',
      completed:false,
      createdAt:Date.now()      
    },{
      title:'exercise',
      completed:true,
      createdAt:Date.now()      
    }
    
    ];
    
    $scope.remove = function(todo){
      
      var idx = $scope.todos.findIndex(function(item){
        return item.title === todo.title;
      });
     
      if(idx >-1){
        $scope.todos.splice(idx,1);
      }
      
    }
    
  }]);
  
})();