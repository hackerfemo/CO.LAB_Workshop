let tones: number[] = []
let mode = ""
let playingFreq = 0
let rgroup = 41
function playHarmony(theNote: string) {
    theNote = theNote.charAt(0)
    if (theNote == '.') {
        for (let i = 0; i < tones.length; i++) {
            midi.toneOff(tones[i])
        }
        playingFreq = 0
        return
    }

    let noteIdx = theNote.charCodeAt(0) - 65
    if (noteIdx < 0 || noteIdx >= tones.length) {
        basic.showString('?', 0)
        return
    }

    let freq = tones[noteIdx]
    if (freq == playingFreq) return
    if (playingFreq != 0) {
        midi.toneOff(playingFreq)
    }
    midi.toneOn(freq)
    playingFreq = freq
}
radio.onReceivedString(function (receivedString) {
    if (receivedString.length < 2) {
        return
    }
    mode = receivedString.charAt(0)
    select = receivedString.charAt(1)
    if (mode == "H") {
        playHarmony(select)
    }
})
input.onButtonPressed(Button.A, function () {
    //basic.showString("C", 0)
    //playHarmony('C')
    rgroup = rgroup + 1
    if (rgroup > 43) {
        rgroup = 41
    }
    basic.clearScreen()
    radio.setGroup(rgroup)
    basic.showNumber(rgroup)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("C", 0)
    playHarmony('C')
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(".", 0)
    playHarmony('.')
})
let select = ""
tones = [262, 294, 330, 350, 392, 440, 494]
radio.setGroup(rgroup)
midi.useRawSerial()
basic.showIcon(IconNames.Heart)
