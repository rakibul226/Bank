
document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputFieldById('deposit-field');
    const previousAmount = getElementValueById('deposit-Total');
    
    const currentDepositAmount= previousAmount + newDepositAmount;
    setTextElementValueById('deposit-Total', currentDepositAmount);

    const previousTotalBalance = getElementValueById('balance-total')
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    setTextElementValueById('balance-total',currentTotalBalance)

})