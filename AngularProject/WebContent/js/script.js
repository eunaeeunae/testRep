// Code goes here

(function(){
  var app = angular.module('todo',[]);//module def cf)array
  // module is big container
  
  /******************** controller  Start *************/
  /*
   * 첫번째 인자 : 컨트롤러 명
   * 두번째 인자[배열] : 함수
   *  
   * */
  app.controller('TodoCtrl',['$scope',function($scope){//controller def
  //controller 에서 두번째 파라미터는 배열로
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
      
    };
    
    
    $scope.add = function(newTotoTitle){
    	// 새로운 todo생성 
    	var newTodo = {
    		title:newTotoTitle,
    		completed:false,
    		createdAt : Date.now()
    			
    	};
    	
    	$scope.todos.push(newTodo);
    	
    	$scope.newTodoTitle = "";
    };
    
    
  }]);
  /******************** controller  End*****************/
  
  /******************** Directive  Start *****************/
  /*
   * 첫번째 인자 : 디렉티브 명
   * 두번째 인자 : 함수 
   * */
  // html에서는 todo-title 썼으나 디렉티브 명은 todoTitle로 쓰는게 관습
  /*app.directive('todoTitle',function(){
	  return {
		  //객체를 설정
		  template:'<h1>to do List</h1>'
	  };
	  
  });
  
  directive.js로 이동
  */
  

  
})();