class Thermostat {
  constructor () {
    this.currentTemp = 20
    this.minTemp = 10
    this.maxTemp = 25
    this.powerSavingMode = true
  }

  up () {
    // Raises the temperature by an amount or until the maxiximum temperature is reached.
    this.currentTemp = Math.min(this.currentTemp + 1, this.maxTemp)
    // Returns updated temperature
    return this.currentTemp
  }

  down () {
    // Lowers the temperature by an amount or until the mininimum temperature is reached.
    this.currentTemp = Math.max(this.currentTemp - 1, this.minTemp)
    // Returns updated temperature
    return this.currentTemp
  }

  setPowerSavingMode (str) {
    if (str === 'on') {
      this.powerSavingMode = true
      this.maxTemp = 25
    } else if (str === 'off') {
      this.powerSavingMode = false
      this.maxTemp = 32
    } else {
      console.log('Invalid mode!')
    }
    return this.powerSavingMode
  }

  getPowerSavingMode () {
    return this.powerSavingMode ? 'On' : 'Off'
  }

  reset () {
    this.currentTemp = 20
    return this.currentTemp
  }

  getUsage () {
    if (this.currentTemp < 18) {
      return 'low-usage'
    } else if (this.currentTemp <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }


}
