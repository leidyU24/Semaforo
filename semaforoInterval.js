let COLORES = ['AMARILLO', 'VERDE','AMARILLO','ROJO']
const semaforoImg = document.querySelector('#semaforo-img')

function semaforoLuz() {
    const color = COLORES.pop()
    console.log(color)

    if (!COLORES.length)
        COLORES = ['AMARILLO', 'VERDE','AMARILLO','ROJO']
    semaforoImg.src = "img/" + color + ".png"
    return color
}

const intervalID = setInterval(semaforoLuz, 1000)