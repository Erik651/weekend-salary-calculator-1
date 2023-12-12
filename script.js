





let totalAnnualSalaryArray = [];
console.log(totalAnnualSalaryArray);

//Array outside of function to hold all the values entered and not reset each time function is run.
let totalSalaryArray= [];

//function to add the information entered for the submit button
function addEmployee(){
    
    let firstName= document.getElementById("firstName").value;
    let lastName= document.getElementById("lastName").value;
    let idNumber= document.getElementById("idNumber").value;
    let jobTitle= document.getElementById("jobTitle").value;
    let annualSalary= document.getElementById("annualSalary").value;
    
    
    
    //create new html element to display the values entered to represent the new employee information
    let newEmployeeElement = document.createElement("div");
    newEmployeeElement.classList.add("column");
    newEmployeeElement.innerHTML = "<p>" + firstName + " " + lastName + " " + idNumber + " " + jobTitle + " " + annualSalary +"</p>"

    
    document.getElementById("employeeList").appendChild(newEmployeeElement);
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("idNumber").value = "";
    document.getElementById("jobTitle").value = "";
    document.getElementById("annualSalary").value = "";
    totalAnnualSalaryArray.push(annualSalary);
    
    //let sum = []

    //totalAnnualSalaryArray.push(parseFloat(annualSalary));
    
    let sum= 0;
    
    for (let i = 0; i < totalAnnualSalaryArray.length; i++){

        
            sum+= parseFloat(totalAnnualSalaryArray[i]);}

    

            
            console.log(sum);
            console.log(totalAnnualSalaryArray);
            
            let monthlySum = (sum/12);//take this total and push, append to footer

            console.log(monthlySum)}





            let monthlySum = 0; 


            let footer = document.getElementsByTagName('footer')[0];

  // Get the HTML element using JavaScript
  function overBudget(){
      // Check the condition and apply styles accordingly
  if (monthlySum < 1666.67) {
    footer.classList.add('over-budget','conditionA');
  } else {
    footer.classList.add('over-budget', 'conditionB');}

    //monthlySum.appendChild.document.getElementById(footer)
}

overBudget();
        //console.log(sum);
        // }
        //totalSalaryArray.forEach(function(totalSalaryArray){
            // totalSalaryArraySum += totalSalaryArray;
            // } );  
            
            
            //let totalMonthlySalarySum= document.createElement("div");
            //totalMonthlySalarySum.innerHTML = "total" + totalSalaryArraySum;
            
            //add numbers together=  parseFloat()  
            //document.getElementsByTagName('footer').appendChild(totalMonthlySalarySum);
            
            
            
            
    
       // console.log(totalSalaryArray);
        //console.log(totalAnnualSalaryArraySum)
