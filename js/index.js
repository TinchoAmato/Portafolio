const git = document.querySelector('#foto2')
git.addEventListener("click",function(){
    window.open('https://github.com/TinchoAmato?tab=repositories')
})

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto, i)=> {
    punto[i].addEventListener("click",()=>{
        let posicion = i
        let operacion = posicion * (-100/6)

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( (cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })  
})

function pasar(){
    let act = document.querySelector('.activo')
        let order = act.id
        if (order == 5){
            order = 0
        } else {
            order++
        }
        let operacion = order * (-100/6)
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach( (cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        let act2 = document.getElementById(order)
        act2.classList.add('activo')
}
window.setInterval(pasar,7000)