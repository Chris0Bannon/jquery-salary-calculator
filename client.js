console.log('i love you');

$(document).ready(readyNow)

function readyNow (){
    $('#submitButton').on('click', submitEmployee);
}

let totalSalary = 0;                // need a starting point that is global

function monthlyCostGenerator(num1) {               // this functions calculates the monthly cost of the employee
    return num1 / 12;       
}

function totalEmployeeMonthlyCost(num1, num2) {
    return num1 += num2;
}

function submitEmployee(){
console.log('hey i clicked submit');
let employeeDataFirst = $('#firstName').val();                   //creating variables out of the user input
let employeeDataLast = $('#lastName').val();                    //that will be used later
let employeeDataID = $('#iD').val();
let employeeDataTitle = $('#title').val();
let employeeDataAnnualSalary = $('#annualSalary').val();
let employeeMonthlyCost = monthlyCostGenerator(employeeDataAnnualSalary);

$('.bodyRows').append(
`<tr>                            
<td>${employeeDataFirst}</td>
<td>${employeeDataLast}</td>
<td>${employeeDataID}</td>
<td>${employeeDataTitle}</td>
<td>${employeeMonthlyCost}</td>
<td><button class = "delete">Delete</button></td>
</tr>`);                                                //this creates space in our table and fills that space
                                                        //with the appropriate values!  it also creates out delete 
                                                        //buttons!!
                              // resetting out input fields to nothing                      



console.log(totalEmployeeMonthlyCost(totalSalary, employeeMonthlyCost));
totalSalary = totalEmployeeMonthlyCost(totalSalary, employeeMonthlyCost)
 
$('.inputField').val('');
}

