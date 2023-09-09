

document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldAmountString);

    const previousWithdrawField = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    currentWithdraw = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawField.innerText = currentWithdraw;

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    currentTotalBalance = previousBalance - newWithdrawAmount;
    previousBalanceElement.innerText = currentTotalBalance;

    withdrawField.value = "";
})