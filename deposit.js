
//step 1: add event listener to the deposit button

document.getElementById("btn-deposit").addEventListener("click", function(){

    //step 2: get the deposit amount from deposit input field

    const depositField = document.getElementById("deposit-field");

    //for input field use .value to get the value inside the input field

    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    const depositTotalElement = document.getElementById("deposit-total");

    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositAmount = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositAmount;


    // balance set up
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 3: clear the deposit field
    depositField.value = "";   

})

//add event listener to the withdraw button

document.getElementById("btn-withdraw").addEventListener("click", function(){

    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    const withdrawElementTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawElementTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;

     const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     withdrawField.value = "";

    if (newWithdrawAmount > previousBalanceTotal){
        alert("Baper Bank a taka nai");
        return;
    }


    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    withdrawElementTotal.innerText = currentWithdrawAmount;



})






















