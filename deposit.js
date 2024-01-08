
//step 1: add event listener to the deposit button

document.getElementById("btn-deposit").addEventListener("click", function(){

    //step 2: get the deposit amount from deposit input field

    const depositField = document.getElementById("deposit-field");

    //for input field use .value to get the value inside the input field

    const depositAmount = depositField.value;
    //console.log(depositAmount);

    const depositTotalElement = document.getElementById("deposit-total");
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

   //console.log(depositAmount);
})

//add event listener to the withdraw button

document.getElementById("btn-withdraw").addEventListener("click", function(){

    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmount = withdrawField.value;
   // console.log(withdrawAmount);

    const withdrawElementTotal = document.getElementByIg("withdraw-total");
    const withdrawTotal = withdrawElementTotal.innerText;
    withdrawElementTotal.innerText = withdrawAmount;

})