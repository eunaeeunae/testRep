/******************** controller  Start *************/
/*** 컨트롤러에서는 뷰(컨트롤러)와 데이터 관리(서비스)가 분리되어 있는 것이 좋다. **/
  /*
   * 첫번째 인자 : 컨트롤러 명
   * 두번째 인자[배열] : 함수
   *  
   * */

  angular.module('todo').controller('TodoCtrl',function($scope,todoStorage){//서비스 주입
  /*controller 에서 두번째 파라미터는 배열로
  	scope 파라미터 주입 필수*/
	  
    /* controller 생성시 두번째 인자 배열로 넣으나
     * service 사용시 오류가 발생할 가능성이 있다.
     * 위와 같이 사용한다.
     * */
	$scope.todos = todoStorage.get();  
	  
    $scope.remove = function(todo){
    	todoStorage.remove(todo);
    };
    
    
    $scope.add = function(newTotoTitle){
    	todoStorage.add(newTotoTitle);
    	
    	/** 2.뷰 관리의 기능 **/
    	$scope.newTodoTitle = "";
    };
    
    
  });
  /******************** controller  End*****************/