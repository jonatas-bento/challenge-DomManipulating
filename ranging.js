const slider = document.querySelector('.slider-input');
let output1 = document.querySelector('.info1');
let output2 = document.querySelector('.info2');

slider.oninput = function(){
if (slider.value <= 8){
    output2.innerHTML = '$8.00';
    output1.innerHTML = '10K PAGEVIEWS'
} else if (slider.value > 8 & slider.value <= 12) {
    output2.innerHTML = '$12.00';
    output1.innerHTML = '50K pageviews'
} else if(slider.value > 12 & slider.value <= 16){
    output2.innerHTML = '$16.00';
    output1.innerHTML = '100K pageviews'
} else if(slider.value > 16 & slider.value <= 24){
    output2.innerHTML = '$24.00';
    output1.innerHTML = '500K pageviews'
} else if(slider.value > 24 & slider.value <= 36){
    output2.innerHTML = '$36.00';
    output1.innerHTML = '1M pageviews'
}
}

slider.addEventListener("mousemove", ()=>{
    let m = slider.value * 3.12;
    let color = 'linear-gradient(90deg,hsl(174, 77%, 80%)' + m + '%,hsl(224, 65%, 95%)' + m +'%)';
    slider.style.background = color; 
})