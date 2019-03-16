let score = JSON.parse(localStorage.getItem('score'))
// Setting score in html
document.querySelector('.value').textContent = score

document.querySelector('.new').addEventListener('click', () => {
    score = 0;
    localStorage.setItem('score',score)
    document.querySelector('.value').textContent = score
})


// EventListeners for hard and easy button
document.querySelector('.hard').addEventListener('click', () => {
    document.querySelector('.body').innerHTML = `
    <div class="row">
        <div class=" box"></div>
        <div class=" box"></div>
        <div class=" box"></div>
    </div>

    <div class="row">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>`
    app(2,2)
})

document.querySelector('.easy').addEventListener('click', () => {
    document.querySelector('.body').innerHTML = `
    <div class="row">
        <div class=" box"></div>
        <div class=" box"></div>
        <div class=" box"></div>
    </div>`
    app(1,1)  
})

