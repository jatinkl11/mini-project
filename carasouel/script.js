const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

//here immage id is importage for transition

let idx=0

let interval= setInterval(running,2000)


function running()
{
   idx++;
   changeImage()

}
//here this function is  added changeimage in the running lamp
function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

// All this is need to be understood and recognized 
function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
    // here all transition occur across all axis that is need ed to be understood
}
rightBtn.addEventListener('click', () => {
    idx++// look how these button on clicking using arrow funnction and we have to understand all these as 

    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

