$(document).ready(function() {
    
    pageScroll();

    
  });

  function pageScroll() {
    var objClass = document.getElementsByClassName("contain");
    for (var i=0;i<objClass.length;i++) {
      objClass[i].scrollTop = objClass[i].scrollTop + 1;
      if ((objClass[i].scrollTop + 80) == objClass[i].scrollHeight){
        objClass[i].scrollTop = -1;
      }
    }
    
    my_time = setTimeout('pageScroll()',100);
  }


