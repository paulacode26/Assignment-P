/*
*@name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Paula Gomez Perez
*/

//References:
const markInputValidE1 = document.querySelector(".mark-input");
const convertButtonE1 = document.querySelector(".button");
const alertDisplayE1 = document.querySelector(".alert");
const graderesultE1 = document.querySelector(".graderesult");
const currentdateE1 = document.querySelector(".currentDate");

const MarkToGrade = () => {
    try {
        alertDisplayE1.innerHTML = ""; //Reset the  error
        graderesultE1.innerHTML = "";
        markInputValidE1.style.removeProperty("border");//Reset the border

        let valueInputE1 = parseInt(markInputValidE1.value); // I used parseInt to convert the input string to number.

        if (!(/[0-9]/.test(valueInputE1))) {   // input should only receive numbers
            markInputValidE1.style.border = "3px solid red";
            throw Error("Invalid input. Please, enter only numbers");

        } else if (valueInputE1 < 0) { // input should only receive positive numbers
            
            markInputValidE1.style.border = "3px solid red";
            throw Error("Invalid input. Please, enter only positive numbers");

        } else if (!(valueInputE1 >= 0 && valueInputE1 < 101)) { // // input should only receive numbers less than 101
            
            markInputValidE1.style.border = "3px solid red";
            throw Error("Invalid input. Please, enter a number less than 101");
        }    
        
        let grade;
        if (valueInputE1 > 90) {
            grade = "A";
        } else if (valueInputE1 > 80) {
            grade = "B";
        } else if (valueInputE1 > 70) {
            grade = "C";
        } else if (valueInputE1 > 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        graderesultE1.innerHTML = `Grade Result: ${grade}`;

    } catch (err) {
        alertDisplayE1.innerHTML = err.message;
    }
};


convertButtonE1.addEventListener('click', () => {
    MarkToGrade()

});


//current Date:
const currentDate = new Date().toDateString();
currentdateE1.textContent = currentDate;  