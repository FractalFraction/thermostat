const Thermostat = require('../src/thermostat.js')

describe("Tests for the Thermostat class:", () => {

    beforeEach(()=>{
        thermostat = new Thermostat();
    })

    it("Test the thermostat is initialised to 20 degrees", () => {
        expect(thermostat.currentTemp).toEqual(20)
    })

    it("increase the temperature with an up function", () => {   
        let amount = 5;
        expect(thermostat.up(amount)).toEqual(25)
    })

    it("increase the temperature with an down function", () => {
        let amount = 7;
        expect(thermostat.down(amount)).toEqual(13)
    })

    it("Test the minimum temperature is 10 degrees ", () => {
        expect(thermostat.minTemp).toEqual(10)
    })

    it("Test if power saving mode is on, the maximum temperature is 25 degrees", () => {
        //Setup
        console.log(thermostat.maxTemp)
        thermostat.setPowerSavingMode('on')
        console.log(thermostat.maxTemp)
        //Do Something
        expect(thermostat.maxTemp).toEqual(25)
    })

    it("Test if power saving mode is off, the maximum temperature is 32 degrees", () => {
        //Setup
        thermostat.setPowerSavingMode('off')
        //Do Something
        expect(thermostat.maxTemp).toEqual(32)
    })

    it("Test if you can reset the temperature to 20 with a reset function", () => {
        //Setup
        thermostat.up(10)
        thermostat.down(3)
        //Do Something
        expect(thermostat.reset()).toEqual(20)
    })

    it("Test for low energy usage",()=>{
        //Setup
        thermostat.down(5)
        //Do Something
        expect(thermostat.getUsage()).toEqual("low-usage")
    })

    it("Test for medium energy usage", () => {
        //Setup - Default to 20 degrees
        thermostat.reset()       
        //Do Something
        expect(thermostat.getUsage()).toEqual("medium-usage")
    })

    it("Test for high energy usage", () => {
        //Setup
        thermostat.up(10)
        //Do Something
        expect(thermostat.getUsage()).toEqual("high-usage")
    })





})
