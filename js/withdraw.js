document.getElementById('btn-withdraw').addEventListener('click' ,function(){
    const withdrawField = document.getElementById('withdraw-field') ;
    const newWithdrawString = withdrawField.value ;
    const newWithdraw = parseFloat(newWithdrawString) ;

    const totalWithdraw = document.getElementById('total-withdraw') ;
    const previousTotalWithdrawString = totalWithdraw.innerText ;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString) ;
    
    const currentTotalWithdraw =  newWithdraw + previousTotalWithdraw;
    totalWithdraw.innerText = currentTotalWithdraw ;

    const totalBalanceField = document.getElementById('balance-total') ;
    const previousTotalBalanceString = totalBalanceField.innerText ;
    const previousTotalBalance = parseFloat(previousTotalBalanceString) ;

    const currentTotalBalance = previousTotalBalance - newWithdraw ;
    totalBalanceField.innerText = currentTotalBalance ;
    
    withdrawField.value = '' ;
})