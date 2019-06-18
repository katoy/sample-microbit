let 角度 = 0
let interval = 0
basic.forever(function () {
    角度 = input.compassHeading()
    interval = Math.round(角度 * (360 - 角度) / 28)
    basic.pause(50)
})
basic.forever(function () {
    // basic.showNumber(interval)
    if (interval > 1155) {
        led.unplot(2, 0)
        basic.pause(200)
    } else if (interval > 50) {
        led.toggle(2, 0)
        basic.pause(interval)
    } else {
        led.plot(2, 0)
        basic.pause(200)
    }
})

