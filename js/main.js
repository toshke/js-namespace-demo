TEST = {
    
    Events : {
        
      handlers : {},
      
      publish : function(eventName){
          if(typeof this.handlers[eventName] !== 'undefined'){
              for(var x in this.handlers[eventName]){
                  if(typeof this.handlers[eventName][x] == 'function'){
                      this.handlers[eventName][x]();
                  }
              }
          }
      },
       
      subscribe : function(eventName, eventHandler){
          if(typeof this.handlers[eventName] === 'undefined'){
              this.handlers[eventName]  = [];
          }
          this.handlers[eventName].push(eventHandler);
      } 
       
    },
    
    Global : {   
        init : function(){
            alert('global');
        }
    },
    
    init : function(){
        
        TEST.Global.init();
        
        for(var x in TEST){
            if( x != 'Global' &&
                typeof TEST[x] == 'object' &&
                TEST[x]['init'] != undefined && 
                typeof(this[x]['init']) == 'function'){
                
                TEST[x].init();
            }
        }       
    }
}




