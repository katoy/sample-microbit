let y2 = 0
let x2 = 0
let dy2 = 0
let y1 = 0
let dx2 = 0
let x1 = 0
let dy = 0
let y = 0
let dx = 0
let x = 0
let rad = 0
let 角度 = 0
basic.forever(function () {
    角度 = input.compassHeading()
    rad = (-90 - 角度) * 3.14 / 180
    dx = Math.round(Math.cos(rad) * 2.4)
    dy = Math.round(Math.sin(rad) * 2.4)
    dx2 = Math.round(Math.cos(rad) * 1.4)
    dy2 = Math.round(Math.sin(rad) * 1.4)
    basic.pause(50)
})
basic.forever(function () {
    basic.clearScreen()
    x = 2
    y = 2
    x1 = x + dx
    y1 = y + dy
    x2 = x + dx2
    y2 = y + dy2
    led.plot(x, y)
    led.plot(x1, y1)
    led.plot(x2, y2)
    basic.pause(400)
    led.toggle(x1, y1)
    basic.pause(400)
})

