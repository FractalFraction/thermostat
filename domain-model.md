# Specification:

* Thermostat starts at 20 degrees (Done)
* You can increase the temperature with an up function (how much?)
* You can decrease the temperature with a down function (how much?)
---
* The minimum temperature is 10 degrees (Done)

---
* If power saving mode is on, the maximum temperature is 25 degrees

1. If power saving is true, then the temparature must be less than equal to the max temp = 25

2. If (power saving === true) then (temp <=25)

3. 
```js
if (power saving === true){
    maxTemp = 25
 }
```


* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off

---
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where you add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
---

## Domain Model 
|Object|Properties|Messages|Context|Output|Done|
|---|---|---|---|---|---|
|Thermostat|currentTemp@number| | | | Yes|
| |minTemp @number |up(amount @number)| raises the temperature by some amount |currentTemp @number|Yes|
| |maxTemp @number |down(amount @number) | raises the temperature by some amount | currentTemp @number|Yes |
| |powerSavingMode @boolean| setPowerSavingMode(@String)|if string = 'on' set max temp to 25| powerSavingMode @boolean| Yes| |
| | | | if string = 'off' set max temp to 32 |powerSavingMode @boolean|Yes |
|||reset()|reset temperature to default temperature of 20|currentTemp @number|Yes|
|||getUsage(currentTemp @number)|if currentTemp < 18|"low energy usage" @String | |
||||if 18<= currentTemp <= 25|"medium energy usage" @String | |
||||if currentTemp > 25|"high energy usage" @String | |