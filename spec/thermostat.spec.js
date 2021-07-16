//import { Thermostat } from '../src/thermostat.js'

describe('Tests for the Thermostat class:', () => {
  beforeEach(() => {
    thermostat = new Thermostat()
  })

  it('Test the thermostat is initialised to 20 degrees', () => {
    expect(thermostat.currentTemp).toEqual(20)
  })

  it('increase the temperature with an up function', () => {
    expect(thermostat.up()).toEqual(21)
  })

  it('increase the temperature with an down function', () => {
    expect(thermostat.down()).toEqual(19)
  })

  it('Test the minimum temperature is 10 degrees ', () => {
    expect(thermostat.minTemp).toEqual(10)
  })

  it('Test if power saving mode is on, the maximum temperature is 25 degrees', () => {
    thermostat.setPowerSavingMode('on')
    expect(thermostat.maxTemp).toEqual(25)
  })

  it('Test if power saving mode is off, the maximum temperature is 32 degrees', () => {
    thermostat.setPowerSavingMode('off')
    expect(thermostat.maxTemp).toEqual(32)
  })

  it('Test if you can reset the temperature to 20 with a reset function', () => {
    // Setup
    thermostat.up()
    expect(thermostat.reset()).toEqual(20)
  })

  it('Test for low energy usage', () => {
    // Setup
    let i = 0
    while (i < 5) {
      thermostat.down()
      i++
    }
    expect(thermostat.getUsage()).toEqual('low-usage')
  })

  it('Test for medium energy usage', () => {
    thermostat.reset()
    expect(thermostat.getUsage()).toEqual('medium-usage')
  })

  it('Test for high energy usage', () => {
    let i = 0
    while (i < 11) {
      thermostat.up()
      i++
    }
    expect(thermostat.getUsage()).toEqual('high-usage')
  })

  it('Test the default power saving mode can be returned',()=>{
    expect(thermostat.getPowerSavingMode()).toEqual('On')
  })

  it('Test the current power saving mode can be returned',()=>{
    thermostat.setPowerSavingMode('off')
    expect(thermostat.getPowerSavingMode()).toEqual('Off')
  })

})
