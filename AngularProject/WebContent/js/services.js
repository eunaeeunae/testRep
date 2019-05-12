/******************** Service  Start *****************/

/******** 
* 데이터 관리의 기능 모아둔다. 
* cf>>
*service
*factory
*provider
*********/

angular.module('todo').factory('todoStorage',function(){
	var TODO_DATA = 'TODO_DATA';
	var storage = {
		/*todos : [{
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
		    
		],*/
		todos:[],
			
		/******************* private(js내에서만 호출 *******************/
		_sageToLocalStorage: function(data){//data:todos
			localStorage.setItem(TODO_DATA, JSON.stringify(data));
		},
		_getFromLocalStorage: function(){
			return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
		},
		
		
		/******************* Public *******************/
		/* 데이터 조회 */
		get: function(){
			//storage.todos = storage._getFromLocalStorage();
			angular.copy(storage._getFromLocalStorage(), storage.todos);
			return storage.todos;
		},
		/* 데이터 삭제 */
		remove: function(todo){
			var idx = storage.todos.findIndex(function(item){
		      return item.title === todo.title;
		    });
		    
		    if(idx >-1){
		   	 storage.todos.splice(idx,1);
		   	 storage._sageToLocalStorage(storage.todos);
		    }
		    
		},
		/* 데이터 생성 */
		add: function(newTodoTitle){
			// 새로운 todo생성 
	    	var newTodo = {
	    		title:newTodoTitle,
	    		completed:false,
	    		createdAt : Date.now()
	    			
	    	};
	    	
	    	
	    	/** 1.데이터 관리의 기능 **/  
	    	storage.todos.push(newTodo);
	    	
	    	storage._sageToLocalStorage(storage.todos);
		}
		
	
	}
	return storage;	
});

/******************** Service  End *****************/