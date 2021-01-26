// Input button for 1st page
const submitBtn = document.getElementById('clickBtn');
submitBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    const transactionArea = document.querySelector('#transaction_area');
    transactionArea.style.display = 'block';
});


// Deposit button for 2nd page
const depositButton = document.getElementById('depositButton');
depositButton.addEventListener('click', function(){
    const depositAmount = document.querySelector('#depositAmount').value;
    const depositNumber = parseFloat(depositAmount);
    
   const currentAmount = document.querySelector('#currentAmount').innerText;
   const currentNumber = parseFloat(currentAmount);
    
   const totalDeposit = currentNumber + depositNumber;
   
   document.querySelector('#currentAmount').innerText = totalDeposit;
   document.querySelector('#depositAmount').value = '';

    const currentBalance = document.querySelector('#currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    const finalBalance = depositNumber + currentBalanceNumber;
    document.querySelector('#currentBalance').innerText = finalBalance;
});

    // Withdraw Button for 2nd page
    const withdrawButton = document.querySelector("#withdrawButton");
    withdrawButton.addEventListener('click', function(){
        const withdrawInput = document.getElementById('withdrawInput').value;
        const withdrawAmount = parseFloat(withdrawInput);
        // console.log(withdrawAmount);
        const currentwithdraw = document.getElementById('currentwithdraw').innerText;
        const currentwithdrawAmount = parseFloat(currentwithdraw);

        const totalWithdraw = currentwithdrawAmount - withdrawAmount;
        document.getElementById('currentwithdraw').innerText = totalWithdraw; 
        document.getElementById('withdrawInput').value = '';

        const currentBalance = document.querySelector('#currentBalance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);

        const presentBalance = currentBalanceNumber - withdrawAmount;
        document.querySelector('#currentBalance').innerText = presentBalance;

    });
