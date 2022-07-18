let slide = document.getElementById("slide")
let y = 0;
function carrossel(){
    if (y == 0) {
      slide.setAttribute('src','imagens/slide1.png') 
      y ++;      
    }else{
        slide.setAttribute('src','imagens/slide.png')
        y --;
    }   
    
    
    //console.log(x)   
}
setInterval(carrossel, 2500)
console.log(slide)