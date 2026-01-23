let voltage = 0
let adc_resolution = 0
let reference_voltage = 0
input.onButtonPressed(Button.A, function () {
    voltage = obtain_voltage(pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(voltage)
    if (voltage >= 3) {
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
function obtain_voltage (value: number) {
    adc_resolution = 1023
    reference_voltage = 3
    return value / adc_resolution * reference_voltage
}
