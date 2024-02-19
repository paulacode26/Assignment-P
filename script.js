/*
*@name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Paula Gomez Perez
*/

//References:
const btnviewE1 = document.querySelector(".viewbtn");
const sectionaboutE1 = document.querySelector(".sectionabout");
const headerHeight = document.querySelector(".header").offsetHeight;
const resumenbtnE1 = document.querySelector(".resume");
const picturenameE1 = document.querySelector(".intro");
const currentdateE1 = document.querySelector(".currentDate");

// Timer to display picture name after 2 seconds.:
const myTimeout = setTimeout(myGreeting, 2000);

function myGreeting() {
    picturenameE1.innerHTML = "PAULA GOMEZ"
}

function myStopFunction() {
  clearTimeout(myTimeout);

}

//Scroll to: Go to the 'About Me' section after clicking the button 'VIEW MORE:
btnviewE1.addEventListener('click', () => {
    const offset = sectionaboutE1.offsetTop - headerHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
});

  //current Date:
  const currentDate = new Date().toDateString();
  currentdateE1.textContent = currentDate;  