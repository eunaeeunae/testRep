/******************** Directive  Start *****************/
/*
 * 첫번째 인자 : 디렉티브 명
 * 두번째 인자 : 함수 
 * */
// html에서는 todo-title 썼으나 디렉티브 명은 todoTitle로 쓰는게 관습
angular.module('todo').directive('todoTitle',function(){
return {
	  //객체를 설정
	  template:'<h1>to do List</h1>'
	  };
	  
});

angular.module('todo').directive('todoItem',function(){
	return {
	templateUrl:'tpl/todoItem.tpl.html'
	};
	  
	  
});

angular.module('todo').directive('todoFilters',function(){
	return {
	templateUrl:'tpl/todoFilters.tpl.html'
	};
	  
	  
});


angular.module('todo').directive('todoForm',function(){
	return {
	templateUrl:'tpl/todoForm.tpl.html'
	};
	  
	  
});

/******************** Directive  End *****************/