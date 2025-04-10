/**
 * Ini adalah program rambu tanda jalan dan berhenti
 * 
 * Cara penggunaan:
 * 
 * Tekan tombol A untuk menampilkan tanda berhenti
 * 
 * Tekan tombol B untuk menampilkan tanda boleh jalan
 */
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            `)
    }
})
pins.digitalWritePin(DigitalPin.P0, 1)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
