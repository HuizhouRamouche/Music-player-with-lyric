var gensui=1;
function changeGensui(){
    if(gensui==0){
        document.getElementsByClassName("container")[0].style.height="420px";
        gensui=1;
    }else if(gensui==1){
        document.getElementsByClassName("container")[0].style.height="auto";
        gensui=0;
    }
}