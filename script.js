function draw() {
    clear()

    //requestAnimationFrame(draw)
}

function resize() {
    canvas.width    = window.innerWidth
    canvas.height   = window.innerHeight
    gl.viewport(0, 0, canvas.width, canvas.height)
}

function clear() {
    gl.clearColor(1, 1, 1, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
}

onresize = resize

onload = () => {
    canvas  = document.getElementsByTagName("canvas")[0]
    gl      = canvas.getContext("webgl")

    resize()
    requestAnimationFrame(draw)
}
