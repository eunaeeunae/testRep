/******************** Service  Start *****************/

/******** 
* 데이터 관리의 기능 모아둔다. 
* cf>>
*service
*factory
*provider
*********/

angular.module('todo').factory('todoStorage',function(){
	var storage = {
		todos : [{
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
		    
		],
		/* 데이터 조회 */
		get: function(){
			return storage.todos;
		},
		/* 데이터 삭제 */
		remove: function(todo){
			var idx = storage.todos.findIndex(function(item){
		      return item.title === todo.title;
		    });
		    
		    if(idx >-1){
		   	 storage.todos.splice(idx,1);
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
		}
		
	
	}
	return storage;	
});

/******************** Service  End *****************/