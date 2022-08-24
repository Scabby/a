function start() {
    if(pixel >= canvas.width * canvas.height) { return }
    
    let x = pixel % canvas.width
    let y = Math.floor(pixel / canvas.width)
    
    canvas.fillRect(x, y, 1, 1)
    
    pixel++
    requestAnimationFrame(start)
}

onready = () => {
    canvas  = document.getElementsByTagName("canvas")[0]
    ctx     = canvas.getContext("2d")
    pixel   = 0
    
    ctx.fillStyle = "#000000"
    start()
}
