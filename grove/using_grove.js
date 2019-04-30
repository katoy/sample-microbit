let x = 0
input.onButtonPressed(Button.A, function () {
    x += 1
    明るさ設定2()
    明るさ表示2()
})
input.onButtonPressed(Button.B, function () {
    x += -1
    明るさ設定2()
    明るさ表示2()
})
function 明るさ表示2() {
    fiveDigit.showNumber(led.brightness())
    basic.pause(200)
}
function 明るさ設定2() {
    if (x >= 256) {
        x = 25
    }
    if (x <= 0) {
        x = 1
    }
    led.setBrightness(x)
}
function 温度の表示2() {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showString("" + input.temperature())
    fiveDigit.showNumber(input.temperature())
    basic.pause(2000)
}
function 実行時間の表示2() {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    for (let i = 0; i < 50; i++) {
        fiveDigit.showNumber(input.runningTime() / 1000)
        basic.pause(100)
    }
}
function 距離の表示2() {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    fiveDigit.showNumber(grove.measureInCentimeters(DigitalPin.P0))
    basic.pause(2000)
}
led.setBrightness(4)
basic.forever(function () {
    basic.pause(2000)
    温度の表示2()
    距離の表示2()
    明るさ設定2()
})
