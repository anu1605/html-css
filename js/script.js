var clicked =false;
var date = new Date();
document.addEventListener('click',function(){
    if(!clicked){
        var i = 0;
        clicked = true;
        document.getElementsByClassName('timer')[0].style.animationName = 'rotateTimer';
        document.getElementsByClassName('timer')[0].style.animationDuration = '60s';
        document.getElementsByClassName('timer')[0].style.animationTimingFunction = 'linear';

    }
    else {console.timeEnd();
        clicked = false;
        document.getElementsByClassName('timer')[0].style.animationName = 'none';
        document.getElementById('display').innerHTML = 0;
    }
})


