const slider = document.querySelector('.slider_class');
const slider_images = document.querySelectorAll('.slider_class img');

const prevBtn = document.querySelector('#previous_btn');
const nextBtn = document.querySelector('#next_btn');


// counter
let counter = 1;
const size = slider_images[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',() => {

    if (counter >= slider_images.length - 1) return;
    slider.style.transition = "transform 0.3s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',() => {

    if (counter<=0) return;
    slider.style.transition = "transform 0.3s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slider.addEventListener('transitionend', () => {

    if (slider_images[counter].id == 'LastClone') {
        slider.style.transition = "none";
        counter = slider_images.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        
    }

    if (slider_images[counter].id == 'FirstClone') {
        slider.style.transition = "none";
        counter = slider_images.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        
    }

});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
 
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

