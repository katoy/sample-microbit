let 角度 = 0
let ang = 0
let dx = 0
let dy = 0
basic.forever(function () {
    角度 = input.compassHeading()
    ang = (630 - 角度) % 360
    basic.pause(50)
})
basic.forever(function () {
    dx = -1
    dy = -1
    if (ang < 180) {
        dy = 1
    }
    if (ang < 90 || 270 < ang) {
        dx = 1
    }
    basic.clearScreen()
    led.plot(2 + 2 * dx, 2 + 2 * dy)
    basic.pause(100)
})

