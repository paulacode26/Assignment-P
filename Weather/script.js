/*
*@name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Paula Gomez Perez
*/

$(document).ready(function() {
  const temperInputE1 = $(".temperature");
  const toKelvinE1 = $(".toKelvin");
  const toCelsiusE1 = $(".toCelsius");
  const btnE1 = $(".btn");
  const messCelsiusE1 = $(".message");

  function conver() {
    // Check if temperInputE1 is empty
    if (!temperInputE1.val()) {
      messCelsiusE1.html(`Please enter a temperature value`);
      return; 
    }

    let valueInputE1 = parseFloat(temperInputE1.val());

    if (toCelsiusE1.is(":checked")) {
      let calculation = (valueInputE1 - 32) * 5 / 9;
      const roundedDown = calculation.toFixed(3);
      messCelsiusE1.html(`${valueInputE1}\xB0F is equal to ${roundedDown}\xB0C`);
    } else if (toKelvinE1.is(":checked")) {
      let calculation2 = valueInputE1 + 273.15;
      const roundedDown2 = calculation2.toFixed(3);
      messCelsiusE1.html(`${roundedDown2} K`);
      messCelsiusE1.html(`${valueInputE1}\xB0C is equal to ${roundedDown2}K`);
    } else {
      messCelsiusE1.html(`Please select one option`);
    }
  }

  btnE1.on('click', conver);
});


//current Date:
$(document).ready(function() {
  const currentdateE1 = $(".currentDate");
  const currentDate = new Date().toDateString();
  currentdateE1.text(currentDate);
}); 
