document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field') ;
    const depositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(depositAmountString) ;
    
    depositField.value = '';
    
    // number validation
    if(isNaN(newDepositAmount)){
        alert('Please Input Correct Amount')
        return;
    }
    
    const depositTotalElement = document.getElementById('deposit-total') ;
    const previousDepositTotalString = depositTotalElement.innerText ;
    const previousDepositTotal = parseFloat(previousDepositTotalString) ;
    
    const newDepositTotal = previousDepositTotal + newDepositAmount ;
    depositTotalElement.innerText = newDepositTotal ;

    const balanceTotal = document.getElementById('balance-total') ;
    const previousBalanceTotalString = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString) ;

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;
    balanceTotal.innerText = currentBalanceTotal ;


})