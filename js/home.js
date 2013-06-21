TEST = TEST || {};


TEST.home = {
    init : function(){
         
         var handler = function(){
             alert('button clicked');
         }
         var publish = function(){
             TEST.Events.publish('btnclick');
         }
         TEST.Events.subscribe('btnclick',  handler);
         
         
         
         document.getElementById('button1').addEventListener('click', publish);
         
         
         document.getElementById('button2').addEventListener('click', publish);
         
    }
}

