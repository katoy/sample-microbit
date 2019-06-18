let dy = 0
let dx = 0
let x = 0
let y = 0
let rad = 0
let 角度 = 0
basic.forever(function () {
    角度 = input.compassHeading()
    rad = (-90 - 角度) * 3.14 / 180
    dx = -Math.round(Math.cos(rad) * 1.4)
    dy = Math.round(Math.sin(rad) * 1.4)
    basic.pause(50)
})
basic.forever(function () {
    basic.clearScreen()
    x = 2 + dx
    y = 2 + dy
    led.plot(2, 2)
    led.plot(x, y)
    basic.pause(400)
    led.toggle(x, y)
    basic.pause(400)
})

