import Employee from './types/Employee';

const fetchEmployees = async () => {
  const response = await fetch('http://localhost:3001/employees');
  const json = await response.json();
  return json;
};

const createEmployee = async (employeeObj: Employee) => {
  const response = await fetch('http://localhost:3001/employees', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employeeObj),
  });
  const json = await response.json();
  return json;
};

export { fetchEmployees, createEmployee };
