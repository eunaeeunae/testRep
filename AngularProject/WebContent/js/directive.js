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
	templateUrl:'todoItem.tpl.html'
	};
	  
	  
});



/******************** Directive  End *****************/