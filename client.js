console.log('i love you'); // Did I source my file correctly?  I did and it felt good

$(document).ready(readyNow) //"Hey JQuery, when the page is down loading be ready to do stuff"

function readyNow() {
    $('#submitButton').on('click', submitEmployee); //if I click the button run the function
    $('.bodyRows').on('click', '.delete', deleteHandler); //if I click the button that doesn't exist yet
    //but that will likely exist here in the future, run the function
}

let totalSalary = 0; // We need a variable that we can update as we go along
// and eventually display on the DOM it has to be global so
//we can access it anywhere.  

function monthlyCostGenerator(num1) { // this functions calculates the monthly cost of the employee
    return num1 / 12;
}

function totalEmployeeMonthlyCost(num1, num2) { //this function will be used to add our individual employee's monthly 
    return num1 += num2; //monthly cost to our global variable
}

function submitEmployee() {
    console.log('hey i clicked submit'); // does a thing happen if we click?

    if ($('#firstName').val() == '' || $('#lastName').val() == '' || $('#iD').val() == '' || $('#title').val() == '' || $('#annualSalary').val() == '') {
        alert('You must enter information in all of the required fields!!');
        return; // this forces the user to input something into every field before clicking submit
        //  this is so gross though, please see my note below and help me!!
    }
    // if ($('.inputField').val() == '') {
    //     alert('You must enter information in all of the required fields!!');
    //     return;
    // }
    //REEEEEE!!!  I goofed with this for over an hour and can not find a way to force the user
    // to input something into every inputField by using the class selector.  The way I have it 
    // above works, but looks so messy.  IF there is any value in the firstName field the if
    // statement stops,instead of checking all of the others.  I have tried using .each() but t
    // that was a MESS!

    let employeeDataFirst = $('#firstName').val(); //creating variables out of the user input
    let employeeDataLast = $('#lastName').val(); //that will be used later
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
</tr>`); //this creates space in our table and fills that space
    //with the appropriate values!  it also creates our delete 
    //buttons!!                   

    totalSalary = totalEmployeeMonthlyCost(totalSalary, employeeMonthlyCost) // resetting our global variable
    $('#totalMonthlyCost').text(totalSalary); //updating the dom with our global variable
    if (totalSalary > 20000) {
        $('#totalMonthlyCost').css("background-color", "red"); //changing totals background color if we are over budget!

    }
    $('.inputField').val(''); // resetting out input fields to nothing   
}

//Hey Instructor!!  the above function is not very concise.  I wrote it that way
// and wrote the other simple arithmetic functions so that I could communicate
// my thought process to the other students I was working with.  I wrote a
// similar function below that is more concise.  I left my logs in so that I
//could show you my work.

function deleteHandler() {
    console.log('i clicked delete'); //does it click?
    let Cost = $(this).parent().prev().text(); //create a variable to hold the value of our deleted employees salary by targeting the delete key with this, then navigating to it's aunt element.
    console.log(Cost); // did we find what we wanted?
    totalSalary = totalSalary - Cost / 12; //adjusting to the monthly cost of employee rather than yearly
    console.log(totalSalary); // did we adjust our math good like?
    $('#totalMonthlyCost').text(totalSalary);
    if (totalSalary > 20000) {
        $('#totalMonthlyCost').css("background-color", "red"); //changing the totals background color to red if we are over budget!
    } else {
        $('#totalMonthlyCost').css("background-color", ""); //changing the background color to default if we cut some cost and end up back within our budget.
    }
    $(this).parent().parent().remove(); // by removing the grandparent element of the delete element, we also delete all of the delete elements aunts and uncles.   
}