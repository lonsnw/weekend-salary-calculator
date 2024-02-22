//Weekend challenge to do list: 

//Create inputs for the following:
//  ✓  * first name - "firstNameInput"
//  ✓  * last name - "lastNameInput"
//  ✓  * ID number - "idInput"
//  ✓  * job title - "titleInput"
//  ✓  * annual salary - "annualSalaryInput"

//establishing salaries array outside of function so that it doesn't reset after each input
let salaries = [];

function addEmployee(event) {
    let firstName = document.querySelector('#firstNameInput').value;
    let lastName = document.querySelector('#lastNameInput').value;
    let idNumber = document.querySelector('#idInput').value;
    let jobTitle = document.querySelector('#titleInput').value;
    let annualSalary = document.querySelector('#annualSalaryInput').value;
    let employeeTable = document.querySelector('#employee-data');
//add the salary to the salaries array
    salaries.push(annualSalary);
//add in the table stuff here using the variables i just set;
//include a delete button that runs a separate function
//that function will remove a grandparent element
//adding formatting to the salary stuff to make it look like currency
//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    employeeTable.innerHTML += `
        <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualSalary))}</td>
        <td><button onClick="deleteEmployee(event)">Delete</button></td>
        </tr>
        `;
//incorporate monthly cost calculation into this function so that it calculates every time something is added
    let annualCost = 0;
//creating a function that calculates the annual cost and then establishing monthlyCost as 1/12th of that
    for (let i = 0; i < salaries.length; i ++) {
//this was treating the salaries as strings instead of numbers, so i added a type conversion
//https://medium.com/@atuljha2402/understanding-javascript-type-coercion-type-conversion-a2ce84c00331#:~:text=Type%20coercion%20refers%20to%20the,complete%20the%20operation%20or%20comparison.
//is there a better way to do this?
        annualCost += Number(salaries[i]);
    }
    console.log((new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualCost)));
//monthlyCost has to follow the annualCost calculation or it won't actually calculate anything correctly
    let monthlyCost = (annualCost / 12);
//use innerHTML to get the monthlyCost into the footer
    let monthlyTotal = document.querySelector('#monthly-total');
    monthlyTotal.innerHTML = `${(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthlyCost))}`
}

function deleteEmployee(event) {
    event.target.parentElement.parentElement.remove();

}

//Create a submit button:
//  ✓  * submit button - 
        //    <button data-testid="submitButton">
        //      Submit
        //    </button>

//The submit button should:
//    * add the inputs to a table that looks like this: https://github.com/lonsnw/weekend-salary-calculator/raw/main/salary-calc-wireframe.png
//  ✓       * note that every row has a delete button that clears the employee from the dom
//         * STRETCH GOAL: removing an employee recalculates the monthly cost to pay the employee
//  ✓  * calculates the monthly costs to pay the employees
//         * note that this will appear in the footer, not in the table
//    * clear the input fields

//Other tasks: 
//    * apply a CSS class "over-budget" to the footer when the monthly costs to pay the employees exceeds $20k 
//    * update the CSS to fit with the theme of the project





