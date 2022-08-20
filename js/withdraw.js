/*
1. add event handler for withdraw
2. get withdraw amount by using getInputFieldValueById
2-5. If anything other than number is put then use isNaN and show alert and then return
3. convert previous withdraw total to number using getElementValuebyId
4. Add previous withdraw total and withdraw field value and set new text using setTextValueByid
4-5. IF Withdraw Money is more than balance then show alert and return
==================================================================================================
5.Set previous Balance total using getElementValuebyId
6. Calculate the New Balance total by substracting the withdraw Field
7.set the new balance total using setTextValuebyid
*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step 2
    const withdrawFieldValue = getInputFieldValueById('withdraw-field');

    // Step 2.5 (Condition)
    if (isNaN(withdrawFieldValue)) {
        alert('Please Enter Your Amount In Numerical Form.')
        return
    }

    // Step 3
    const previousWithdrawTotal = getElementValuebyId('withdraw-total');

    // Step 5
    const previousBalanceTotal = getElementValuebyId('balance-total');

    // Step 4.5 (Condition)
    if (withdrawFieldValue > previousBalanceTotal) {
        alert('You Do Not Have Sufficient Amount.');
        return;
    }
    // Step 4
    const newWithdrawTotal = previousWithdrawTotal + withdrawFieldValue;
    setTextValueByid('withdraw-total', newWithdrawTotal);
    // Step 6
    const newBalanceTotal = previousBalanceTotal - withdrawFieldValue;
    // Step 7
    setTextValueByid('balance-total', newBalanceTotal);

})