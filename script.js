//Weekend challenge to do list: 

//Create inputs for the following:
//  ✓  * first name - "firstNameInput"
//  ✓  * last name - "lastNameInput"
//  ✓  * ID number - "idInput"
//  ✓  * job title - "titleInput"
//  ✓  * annual salary - "annualSalaryInput"

//establishing salaries array outside of function so that it doesn't reset after each input
let salaries = [];

function calculateCost() {
    console.log('in calculate cost function');
//creating separate function so i can run it every time something is added or removed
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
    console.log(monthlyCost);
//use innerHTML to get the monthlyCost into the footer
    let monthlyTotal = document.querySelector('#monthly-total');
    console.log(monthlyTotal)
    monthlyTotal.innerHTML = `${(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthlyCost))}`
    let budgetIndicator = document.querySelector('#budget-indicator');
    if (monthlyCost > 20000) {
        budgetIndicator.classList.add("over-budget")
    }
    else {
        budgetIndicator.classList.remove("over-budget")
    }
    console.log(budgetIndicator);
}

function addEmployee(event) {
    console.log('in add employee function');
    event.preventDefault();
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
    calculateCost();
    function clearInputs(){
        console.log('in clear inputs function');
        document.querySelector('#firstNameInput').value = '';
        document.querySelector('#lastNameInput').value = '';
        document.querySelector('#idInput').value = '';
        document.querySelector('#titleInput').value = '';
        document.querySelector('#annualSalaryInput').value = '';
    }
    clearInputs();
}

function deleteEmployee(event) {
    console.log('in delete employee function');
//my original splice method worked here, but only once.
    //salaries.splice((salaries.indexOf(event.target)), 1, 0)
//went to office hours with carlos and learned about the arguments and why this wasn't working
//we have the first as the start argument, 
//the second is how many to delete, anything after is what you want to add.
//i didn't need the third argument 0 because i didn't want to add.
    console.log(salaries.indexOf(event.target));
//correcting this solved the issue
    salaries.splice((salaries.indexOf(event.target)), 1);
    console.log(salaries.indexOf(event.target));
    console.log(event.target.parentElement.parentElement);
    event.target.parentElement.parentElement.remove();
    calculateCost();
}

//Create a submit button:
//  ✓  * submit button - 
        //    <button data-testid="submitButton">
        //      Submit
        //    </button>

//The submit button should:
//    * add the inputs to a table that looks like this: https://github.com/lonsnw/weekend-salary-calculator/raw/main/salary-calc-wireframe.png
//  ✓       * note that every row has a delete button that clears the employee from the dom
//  ✓       * STRETCH GOAL: removing an employee recalculates the monthly cost to pay the employee
//  ✓  * calculates the monthly costs to pay the employees
//         * note that this will appear in the footer, not in the table
//  ✓  * clear the input fields

//Other tasks: 
//  ✓  * apply a CSS class "over-budget" to the footer when the monthly costs to pay the employees exceeds $20k 
//    * update the CSS to fit with the theme of the project





