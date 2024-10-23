// Your code here

// 1. Create Employee Record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
   }
   
   
   // 2. Create Employee Records (Array of Employee Objects)
   function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
   }
   
   
   // 3. Create Time-In Event
   function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
    return employee;
   }
   
   
   // 4. Create Time-Out Event
   function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    });
    return employee;
   }
   
   
   // 5. Calculate Hours Worked on a Given Date
   function hoursWorkedOnDate(employee, soughtDate) {
    const timeIn = employee.timeInEvents.find((e) => e.date === soughtDate);
    const timeOut = employee.timeOutEvents.find((e) => e.date === soughtDate);
    return (timeOut.hour - timeIn.hour) / 100; // Convert 800 -> 8 hours
   }
   
   
   // 6. Calculate Wages Earned on a Given Date
   function wagesEarnedOnDate(employee, date) {
    const hours = hoursWorkedOnDate(employee, date);
    return hours * employee.payPerHour;
   }
   
   
   // 7. Calculate Total Wages for All Dates
   function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, event) => {
      return total + wagesEarnedOnDate(employee, event.date);
    }, 0);
   }
   
   
   // 8. Calculate Payroll for All Employees
   function calculatePayroll(employees) {
    return employees.reduce((total, employee) => {
      return total + allWagesFor(employee);
    }, 0);
   }
   
