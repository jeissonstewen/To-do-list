const tarea = document.querySelector('.tarea')
const nombre = document.getElementById('text')
const pendiente = document.getElementById('pendiente')
const realizada = document.getElementById('realizada')
let cont = 0
let real = 0


agregar.addEventListener('click',()=>{
    console.log('agregar')
    console.log(nombre.value)

    if(nombre.value == ''){
    alert('La tarea no debe estar en blanco')
    } else {
    const tareas = document.createElement('div')
    tareas.className = 'info__tarea'
    tarea.id = ('tarea')
    const nombreTarea = document.createElement('p')
    nombreTarea.className = 'tarea__text'
    nombreTarea.textContent = nombre.value
    const borrar = document.createElement('img')
    borrar.className = 'icon'
    borrar.id = 'eliminar'
    borrar.src = './images/borrar.svg'
    tareas.append(nombreTarea)
    tareas.append(borrar)
    tarea.append(tareas)
    cont++
    pendiente.innerHTML = cont
    }
    nombre.value = ''

})

info__tareas.addEventListener('click', (e)=>{
    console.log(e)
    if(e.target.id == 'eliminar'){
        console.log('Click en eliminar')
        console.log(e.target.parentElement)
        const papa = e.target.parentElement
        tarea.removeChild(papa)
        cont--
        pendiente.innerHTML = cont
        real++
        realizada.innerHTML = real
    }
})  