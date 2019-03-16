const app = function(point, chance) {
    
    // Variables
    let header = document.querySelector('.header')
    let box = document.querySelectorAll('.box')



    // Getting random for red, green and blue
    const min = 0
    const max = 255
    const fred = Math.floor(Math.random() * (max - min + 1)) - min
    const fgreen = Math.floor(Math.random() * (max - min + 1)) - min
    const fblue = Math.floor(Math.random() * (max - min + 1)) - min
    let red
    let blue
    let green

    // Setting value  of header
    document.querySelector('.red').textContent = fred
    document.querySelector('.green').textContent = fgreen
    document.querySelector('.blue').textContent = fblue

    //Selecting a random box
    let random = Math.floor(Math.random() * (box.length + 0)) 
    box[random].style.backgroundColor = `rgb(${fred},${fgreen}, ${fblue})`
    box[random].classList.add('random')

    // Seting up box
    for(i = 0; i < box.length; i++){
        if(i != random){
            red = Math.floor(Math.random() * (max - min + 1)) - min
            green = Math.floor(Math.random() * (max - min + 1)) - min
            blue = Math.floor(Math.random() * (max - min + 1)) - min

            box[i].style.backgroundColor = `rgb(${red},${green}, ${blue})`
        } 
    }


    box.forEach((box) => {
        box.addEventListener('click', (e) =>{
            
            if(e.target.className.includes('random')){
                alert('You won')
                location.assign('./index.html')
                score += point
                localStorage.setItem('score',score)
            }else{
                e.target.style.backgroundColor = 'rgb(63, 56, 56)'
                chance--
                if(chance <= 0){
                    alert('You loose')
                    location.assign('./index.html')
                    score = 0;
                    localStorage.setItem('score',score)
                    document.querySelector('.value').textContent = score
                    document.querySelector('.chance').textContent = chance
                }
                document.querySelector('.chance').textContent = chance
            }
            
        })
    })
    // Setting up chances tab
    document.querySelector('.chance').textContent = chance
}