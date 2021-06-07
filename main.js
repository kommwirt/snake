// Get the frame done

let frame = document.createElement('div')
frame.setAttribute('id','snakeField')
let body = document.querySelector('body')
let script = document.querySelector('script')
body.insertBefore(frame , script)

let colours = []

for(let i=0; i<=99; i++){
    let single = document.createElement('div')
    single.classList.add('item')
    frame.appendChild(single)

    var min = 0;
    var max = 255;

    
    single.addEventListener('mouseover', () => {
        let r = (Math.random() * (max - min)) + min;
        let g = (Math.random() * (max - min)) + min;
        let b = (Math.random() * (max - min)) + min;
        let rgb = [r, g, b]
       single.style.backgroundColor=`rgb(${rgb})`
       setTimeout(function () {
        single.style.backgroundColor = 'lightblue'
    }, 600)
        
    })
   
}

