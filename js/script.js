var clicked =false;
document.addEventListener('click',function(){
    if(!clicked){
        clicked = true;
        for(i = 0;i< 180;i++){
            document.getElementsByClassName('timer')[0].style.transform = 'rotateZ(0deg + i)'
        }

    }
    else clicked = false;
})


