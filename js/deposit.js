document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFieldValue = getInputFieldValueById('deposit-field');
    // If anything other than number is put then use isNaN and show alert and then return
    if (isNaN(depositFieldValue)) {
        alert('Please Enter Your Amount In Numerical Form.')
        return
    }
    // previous deposit is converted to number
    const previousDepositTotal = getElementValuebyId('deposit-total');

    // Set Element text to replace the previous value
    const newDepositTotal = depositFieldValue + previousDepositTotal;
    setTextValueByid('deposit-total', newDepositTotal)


    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    // get previous balance total
    const previousBalanceTotal = getElementValuebyId('balance-total')
    // Calculate new balance total
    const newBalanceTotal = previousBalanceTotal + depositFieldValue;
    // Set the Balance total at top and replace the previous balance
    setTextValueByid('balance-total', newBalanceTotal);
})