// Bank Customer
const customer = {
    name: 'Ahmed Reza',
    balance: 1000,
  };
  
  // Functions to deposit and withdraw money
  const deposit = (amount) => {
    customer.balance += amount;
  };
  
  const withdraw = (amount) => {
    if (amount <= customer.balance) {
      customer.balance -= amount;
      return true;
    } else {
      return false;
    }
  };
  
  // Display initial account details
  const displayAccountDetails = () => {
    const accountDetails = document.getElementById('accountDetails');
    accountDetails.textContent = `Name: ${customer.name}, Balance: Rs. ${customer.balance}`;
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    displayAccountDetails();
  
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const amountInput = document.getElementById('amount');
    const transactionMessage = document.getElementById('transactionMessage');
  
    depositBtn.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value);
      if (!isNaN(amount) && amount > 0) {
        deposit(amount);
        displayAccountDetails();
        transactionMessage.textContent = `Deposited Rs. ${amount}`;
        transactionMessage.classList.remove('text-red-500');
        transactionMessage.classList.add('text-green-500');
      } else {
        transactionMessage.textContent = 'Please enter a valid positive amount';
        transactionMessage.classList.remove('text-green-500');
        transactionMessage.classList.add('text-red-500');
      }
    });
  
    withdrawBtn.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value);
      if (!isNaN(amount) && amount > 0) {
        const success = withdraw(amount);
        if (success) {
          displayAccountDetails();
          transactionMessage.textContent = `Withdrawn Rs. ${amount}`;
          transactionMessage.classList.remove('text-red-500');
          transactionMessage.classList.add('text-green-500');
        } else {
          transactionMessage.textContent = 'Insufficient balance';
          transactionMessage.classList.remove('text-green-500');
          transactionMessage.classList.add('text-red-500');
        }
      } else {
        transactionMessage.textContent = 'Please enter a valid positive amount';
        transactionMessage.classList.remove('text-green-500');
        transactionMessage.classList.add('text-red-500');
      }
    });
  });
  