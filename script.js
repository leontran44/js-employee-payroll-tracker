// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects.
  // I need to initialize an empty array.
  const employees = [];
  // I need to use a loop to continueously prompt the user for employee data until they want to stop. in this case 'While' loop is better. 
  let newEmployees = true;
  while (newEmployees) {
    const firstName = prompt('Enter the first name:');
    const lastName = prompt('Enter the last name:');
    const salary = parseFloat(prompt('Enter the salary:')); // parseFloat to convert input to a number.

  // For the salary, the input has to be valid. In this if statement every variables have to satisfy the conditions then
  if (firstName && lastName && !isNaN(salary)) {
    // Create employee object with collected data from ther user.
    const employee = { firstName, lastName, salary };
    // and then add the employee object to the array.
    employees.push(employee);
  } else {
    alert('Invalid input. Please enter valid details for the employee.');
  }
  // need a check if the user wants to add more employee.
  newEmployees = confirm('Would you like to add new employee?');
}
// user has finished inputting data then return the array of employee objects.
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Check if the array is empty
  if (employeesArray.length === 0) {
    console.log('No employees available.');
    return;
  }
  // calculate total salary using reduce() (reference from https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers)
  const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  // divide total salary by number of employees
  const averageSalary = totalSalary / employeesArray.length;
  // and then display the average salary
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Check if the array is empty
  if (employeesArray.length === 0) {
    console.log('No employees available for the drawing.');
    return;
  }
  // generate random employee
  // reference for this line of code 58 (https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array)
  const randomIndex = Math.floor(Math.random() * employeesArray.length); 

  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
