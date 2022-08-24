function draw() {
    refresh()
    
    for(let p = 0; p < canvas.width * canvas.height; p++) {
        let x = p % canvas.width
        let y = Math.floor(p / canvas.width)
        
        if(Math.random() > 0.5) { ctx.fillStyle = "#000000" }
        else                    { ctx.fillStyle = "#ffffff" }
        
        ctx.fillRect(x, y, 1, 1)
    }
    
    requestAnimationFrame(draw)
}

function set(x, y) {
    ctx.fillRect(x, y, 1, 1)
}

function refresh() {
    ctx.canvas.width    = window.innerWidth
    ctx.canvas.height   = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

onload = () => {
    canvas  = document.getElementsByTagName("canvas")[0]
    ctx     = canvas.getContext("2d")
    pixel   = 0

    requestAnimationFrame(draw)
}
