$(document).ready(() => {
  var scrollTimerHandle = "";
  var positionTimerHandle = "";

  $("#container").scroll(function() {
      var boxSize = 84;
      var newScrollPosition = parseInt(this.scrollTop / boxSize) * boxSize,
      _this = this;

      clearInterval(scrollTimerHandle);
      scrollTimerHandle  = setTimeout(function() {
          positionTimerHandle = setInterval(function(){
            if (_this.scrollTop == newScrollPosition){
               clearInterval(positionTimerHandle);
            } else {
               _this.scrollTop--;
            }
          }, 5);

      }, 600);
  });



})
