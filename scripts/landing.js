
var pointsArray = document.getElementsByClassName('point');
 
var revealPoint = function(point) {
  point.style.opacity = 1;
  point.style.transform = "scaleX(1) translateY(0)";
  point.style.msTransform = "scaleX(1) translateY(0)";
  point.style.WebkitTransform = "scaleX(1) translateY(0)";
  point.style.transform = "rotate(180deg)";  
  point.style.msTransform = "rotate(180deg)";
  point.style.WebkitTransform = "rotate(180deg)"; 
};

var animatePoints = function(points) {
      forEach(points, revealPoint);
};


window.onload = function() {
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
          if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
    
    
    forEach([1,2,3,4], function (number) {
        console.log(number);
    });
 }

