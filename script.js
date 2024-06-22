// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];

  let newEmployees = true;
  while (newEmployees) {
    const firstName = prompt('Enter the first name:');
    const lastName = prompt('Enter the last name:');
    const salary = parseFloat(prompt('Enter the salary:')); // parseFloat to convert input to a number

  if (firstName && lastName && !isNaN(salary)) {
    // Create employee object with collected data from ther user.
    const employee = { firstName, lastName, salary };
    employees.push(employee); //Add the employee object to the array.
  } else {
    alert('Invalid input. Please enter valid details for the employee.');
  }
  newEmployees = confirm('Would you like to add new employee?');
}
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Check if array is empty
  if (employeesArray.length === 0) {
    console.log('No employees available.');
    return;
  }
  const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  const averageSalary = (totalSalary / employeesArray.length).toFixed(2); // Limit to 2 decimal points
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Check if array is empty
  if (employeesArray.length === 0) {
    console.log('No employees available for the drawing.');
    return;
  }
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
