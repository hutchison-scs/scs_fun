let voltage = 0
input.onButtonPressed(Button.A, function () {
    voltage = convert_voltage(pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(voltage)
    if (voltage > 1.5) {
        music.ringTone(523)
        basic.pause(1000)
    } else {
        music.ringTone(131)
        basic.pause(1000)
    }
    basic.clearScreen()
    music.stopAllSounds()
})
// Converts the analog reading from Pin 0 to a voltage between 0 and 3 volts.
function convert_voltage (value: number) {
    return value / 1023 * 3
}
