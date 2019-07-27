console.log('i love you');

$(document).ready(readyNow)

function readyNow (){
    $('#submitButton').on('click', submitEmployee);
    $('.bodyRows').on('click', '.delete', deleteHandler)
}

let totalSalary = 0;                // need a starting point that is global

function monthlyCostGenerator(num1) {               // this functions calculates the monthly cost of the employee
    return num1 / 12;       
}   

function totalEmployeeMonthlyCost(num1, num2) {    //function to determine what the single employee
    return num1 += num2;                            // I know that I don't really need this function and could have written a lot less 
}                                                   // or the one above it but I was trying to be very 
                                                    //what my logic was to the other students i was working with
function deleteHandler(){
    console.log('i clicked delete');
    $(this).parent().parent().remove();
}

function submitEmployee(){
console.log('hey i clicked submit');

if ($('#firstName').val() == '' || $('#lastName').val()== '' || $('#iD').val() == '' || $('#title').val() == '' || $('#annualSalary').val() == ''){
    alert('You must enter information in all of the required fields!!');
    return;  // this is so gross please help me!!
}


// if ($('.inputField').each() == '') {
//     alert('You must enter information in all of the required fields!!');
//     return;
// }
// CAN YOU PLEASE TELL ME WHY THIS DOESN'T WORK WTF!!!!  it only half works.  I found a work around but I WANT to do it this way so I feel smarter.
// I want Jquery to check every item with the class 'inputField' before it puts out an alert.  Instead I have that sloppy code block above.

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
<td>${employeeDataAnnualSalary}</td>
<td><button class = "delete" >Delete</button></td>
</tr>`);                                                //this creates space in our table and fills that space
                                                        //with the appropriate values!  it also creates out delete 
                                                        //buttons!!
                              // resetting out input fields to nothing                      


totalSalary = totalEmployeeMonthlyCost(totalSalary, employeeMonthlyCost)
$('#totalMonthlyCost').text(totalSalary); 
if (totalSalary > 20000) {
   console.log('do a thing');
   
    $('#totalMonthlyCost').css("background-color", "red");

}
$('.inputField').val('');
}

