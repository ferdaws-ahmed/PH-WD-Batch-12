
const employee = {
     firstName: "Mark",
      lastName: "Po",
       employeeId: 101,
        departmentCode: "HR" 
}

const namePart1 = employee.lastName.slice(0,3);
const namePart2 = employee.firstName.slice(0,3);
const companyName = 'AlphaCorp';

const userName = namePart1 + employee.employeeId + '@' + companyName.toLowerCase() + '.com';
const pass = namePart2 + '#' + employee.departmentCode;
console.log(userName , ' , ', 'Temp Pass : ' , pass );