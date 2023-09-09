
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');

    const previousWithdrawAmount = getElementValueById('withdraw-total');

    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    
    setTextElementValueById('withdraw-total',currentWithdrawAmount);

    const previousBalanceTotal = getElementValueById('balance-total');
    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total',currentTotalBalance);

})