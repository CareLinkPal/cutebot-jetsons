basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`)
music.playTone(Note.C, music.beat(BeatFraction.Quarter))
music.playTone(Note.D, music.beat(BeatFraction.Quarter))
music.playTone(Note.E, music.beat(BeatFraction.Quarter))
music.playTone(Note.F, music.beat(BeatFraction.Quarter))
music.playTone(Note.G, music.beat(BeatFraction.Half))

basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
    basic.pause(200)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    basic.pause(200)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
    basic.pause(200)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    basic.pause(200)
})

basic.forever(function () {
    cuteBot.motors(50, 50)
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        music.playMelody("G F E D C - - -", 120)
        cuteBot.motors(0, 0)
        basic.pause(500)
        cuteBot.turnleft()
        basic.pause(500)
    }
})

input.onSound(DetectedSound.Loud, function () {
    cuteBot.motors(-50, -50)
    basic.pause(500)
    cuteBot.turnleft()
    basic.pause(500)
})
