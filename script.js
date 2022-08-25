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
    gl.clear(1, 0, 1, 1)
}

onresize = resize

onload = () => {
    canvas  = document.getElementsByTagName("canvas")[0]
    gl      = canvas.getContext("webgl")

    requestAnimationFrame(draw)
}
