// let cont = document.querySelector('.cont')
// let svg =  document.createElement('svg')
// let circle = document.createElement('circle')

// svg.setAttribute('height',1000)
// svg.setAttribute('width',1000)
// circle.setAttribute('cx',150)
// circle.setAttribute('cy',150)
// circle.setAttribute('r',300)
// circle.setAttribute('fill','black')


// svg.appendChild(circle)

// cont.appendChild(svg)

const rowCol = document.getElementsByClassName('row-cols-3 ')[0]


addEventListener("resize",() => {
    if(window.innerWidth <= 500){
         rowCol.classList.remove("row-cols-3")
        rowCol.classList.add("row-cols-1")
    }else{
        rowCol.classList.add("row-cols-3")
    }
})    

addEventListener("load", () => {
    if(window.innerWidth <= 500){
        rowCol.classList.remove("row-cols-3")
       rowCol.classList.add("row-cols-1")
//console.log()
   }else{
       rowCol.classList.add("row-cols-3")
   }
})



