document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = "";

    const depositTotalElement = document.getElementById('deposit-Total');
    const previousDepositAmountString = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositAmount;

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    console.log(previousBalance);


    const currentBalance = previousBalance + newDepositAmount;
    previousBalanceElement.innerText = currentBalance;
})