function draw() {
    if(pixel >= canvas.width * canvas.height) { return }
    
    let x = pixel % canvas.width
    let y = Math.floor(pixel / canvas.width)
    
    ctx.fillRect(x, y, 1, 1)
    
    pixel++
}

onready = () => {
    canvas  = document.getElementsByTagName("canvas")[0]
    ctx     = canvas.getContext("2d")
    pixel   = 0

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "ffffff"
    setTimeout(draw, 16)
}
