// step-1 : add event huddler on withdraw btn 
document.getElementById('btn-withdraw').addEventListener('click' ,function(){
    // step-2: get value on withdraw field 
    const withdrawField = document.getElementById('withdraw-field') ;
    const newWithdrawString = withdrawField.value ;

    // step-2.5: convert withdraw amount string to float
    const newWithdraw = parseFloat(newWithdrawString) ;
    
    // step-3: clear input field
    withdrawField.value = '' ;

    // number validation
    if(isNaN(newWithdraw)){
        alert('Please Input Correct Amount')
        return;
    }

    // step-4: get total withdraw value by innerText
    const totalWithdraw = document.getElementById('total-withdraw') ;
    const previousTotalWithdrawString = totalWithdraw.innerText ;

    // step-4.5: convert total withdraw value string to float
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString) ;
    
    // step-5: get total balance value by innerText
    const totalBalanceField = document.getElementById('balance-total') ;
    const previousTotalBalanceString = totalBalanceField.innerText ;

    // step-5.5: convert total balance value string to float
    const previousTotalBalance = parseFloat(previousTotalBalanceString) ;

    // validation of withdraw amount
    if (newWithdraw > previousTotalBalance){
        alert('Baap Er Bank ato tk nai!')
        return;
    }

    // step-6: update total withdraw
    const currentTotalWithdraw =  newWithdraw + previousTotalWithdraw;
    totalWithdraw.innerText = currentTotalWithdraw ;

    // step-7: update total balance
    const currentTotalBalance = previousTotalBalance - newWithdraw ;
    totalBalanceField.innerText = currentTotalBalance ;
    
})