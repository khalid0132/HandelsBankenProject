// Input button for 1st page
const submitBtn = document.getElementById('clickBtn');
submitBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';
});


// Deposit button for 2nd page
const depositButton = document.getElementById('depositButton');
depositButton.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);
    
//    const currentAmount = document.getElementById('currentAmount').innerText;
//    const currentNumber = parseFloat(currentAmount);
//    const totalDeposit = currentNumber + depositNumber;
//    document.getElementById('currentAmount').innerText = totalDeposit;
   
   updateSpanText('currentAmount', depositNumber);
   updateSpanText('currentBalance', depositNumber);
 
   document.getElementById('depositAmount').value = '';
});
    function updateSpanText(id, depositNumber){
        const currentBalance = document.getElementById(id).innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const finalBalance = depositNumber + currentBalanceNumber;
        document.getElementById(id).innerText = finalBalance;
       
    }


    // Withdraw Button for 2nd page
    const withdrawButton = document.getElementById("withdrawButton");
    withdrawButton.addEventListener('click', function(){
        const withdrawInput = document.getElementById('withdrawInput').value;
        const withdrawAmount = parseFloat(withdrawInput);
        // console.log(withdrawAmount);
        const currentwithdraw = document.getElementById('currentwithdraw').innerText;
        const currentwithdrawAmount = parseFloat(currentwithdraw);
        const totalWithdraw = currentwithdrawAmount + withdrawAmount;
        document.getElementById('currentwithdraw').innerText = totalWithdraw; 
        
        const currentBalance = document.getElementById('currentBalance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const presentBalance = currentBalanceNumber - withdrawAmount;
        document.getElementById('currentBalance').innerText = presentBalance;
        
        document.getElementById('withdrawInput').value = '';
    });
