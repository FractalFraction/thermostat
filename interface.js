$(window).on('load', function() {
  const thermostat = new Thermostat()
  // add a <button> element to your html with id of 'button'
  // add a <span> element to your html with id of 'message'
  const message = document.getElementById('message')
  const buttonPS = document.getElementById('button-ps')
  const weather = document.getElementById('weather')
  const usage = document.getElementById('usage')
  const apiId = '4b3986ece3bb213adb6d97c018eae1dd';

  //Up Button
  $("#button-up").click(function() {
      message.innerText = thermostat.up();
      usage.innerText = thermostat.getUsage ();
 
    if (usage.innerHTML === 'low-usage'){
          $("#usage").css('color','green')
          $("#temp-bar").css('background-color','green')
        } else if (usage.innerHTML === 'medium-usage'){
          $("#usage").css('color','orange')
          $("#temp-bar").css('background-color','orange')
        } else {
          $("#usage").css('color','red')
          $("#temp-bar").css('background-color','red')
        }
  });

  //Down Button
  $("#button-down").click(function() {
    message.innerText = thermostat.down();
    usage.innerText = thermostat.getUsage();

    if (usage.innerHTML === 'low-usage'){
      $("#usage").css('color','green')
      $("#temp-bar").css('background-color','green')
    } else if (usage.innerHTML === 'medium-usage'){
      $("#usage").css('color','orange')
      $("#temp-bar").css('background-color','orange')
    } else {
      $("#usage").css('color','red')
      $("#temp-bar").css('background-color','red')
    }
  });

  //Reset Button
  $("#button-reset").click(function() {
    console.log(message.innerText);
    message.innerText = thermostat.reset();
    usage.innerText = thermostat.getUsage();
    $("#usage").css('color','orange')
    $("#temp-bar").css('background-color','orange')
  });

  //Power Saving Mode
  $("#button-ps").click(function() {
      //Need to find the part of get the current value of the inner text field - should be either On or Off
      const currentStatus = thermostat.getPowerSavingMode();
      const convTable = {On: 'off',
                        Off: 'on'};
      const input = convTable[currentStatus];
      thermostat.setPowerSavingMode(input);
      buttonPS.innerText = `Power Saving: ${thermostat.getPowerSavingMode()}`;
  });

$("#search-box").on('keypress',function(e) {
    if(e.which == 13) {
      console.log($( this ).val());
      console.log(apiId)
      const cityName = $(this).val();
       $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiId}`,(data)=>{
        console.log(`The temperature is ${data.main.temp}`)
        weather.innerText = `The temperature is ${data.main.temp}`
      })  
    }
});

})
