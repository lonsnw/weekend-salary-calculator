//Weekend challenge to do list: 

//Create inputs for the following:
//    * first name - "firstNameInput"
//    * last name - "lastNameInput"
//    * ID number - "idInput"
//    * job title - "titleInput"
//    * annual salary - "annualSalaryInput"

function addEmployee(event) {
    let firstName = document.querySelector('#firstNameInput').value;
    let lastName = document.querySelector('#lastNameInput').value;
    let idNumber = document.querySelector('#idInput').value;
    let jobTitle = document.querySelector('#titleInput').value;
    let annualSalary = document.querySelector('#annualSalaryInput').value;
    let employeeTable = document.querySelector('#employee-data');
//add in the table stuff here using the variables i just set;
//include a delete button that runs a separate function
//that function will remove a parent element, possibly grandparent
    employeeTable.innerHTML += `
        <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button onClick="deleteEmployee(event)">Delete</button></td>
        </tr>
        `;
}

function deleteEmployee(event) {
    event.target.parentElement.parentElement.remove();
}


//Create a submit button:
//    * submit button - 
        //    <button data-testid="submitButton">
        //      Submit
        //    </button>

//The submit button should:
//    * add the inputs to a table that looks like this: https://github.com/lonsnw/weekend-salary-calculator/raw/main/salary-calc-wireframe.png
//         * note that every row has a delete button that clears the employee from the dom
//         * STRETCH GOAL: removing an employee recalculates the monthly cost to pay the employee
//    * calculates the monthly costs to pay the employees
//         * note that this will appear in the footer, not in the table
//    * clear the input fields

//Other tasks: 
//    * apply a CSS class "over-budget" to the footer when the monthly costs to pay the employees exceeds $20k 
//    * update the CSS to fit with the theme of the project





