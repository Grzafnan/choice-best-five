document.getElementById('calculate').addEventListener('click', function () {
  let playerValue = getInputValueById('player-budget');

  if (isNaN(playerValue)) {
    alert('Please Provide a Number');
    return;
  }
  else if (playerValue < 0) {
    alert("Please Provide Positive Number");
    return;
  }

  let selectedPlayerTotal = getElementById('selected-total');

  let totalPlayerExpenseAmount = playerValue * selectedPlayerTotal;

  let playerExpenses = setElementValueById('player-expense', totalPlayerExpenseAmount);

})

// Calculate Total 

document.getElementById('calculate-total').addEventListener('click', function () {
  let managerAmountValue = getInputValueById('manager-amount');

  let coachAmountValue = getInputValueById('coach-amount');

  let playerExpensesTotal = getElementById('player-expense');

  if (managerAmountValue < 0) {
    alert("Please Provide Positive Number");
    return;
  }
  else if (coachAmountValue < 0) {
    alert("Please Provide Positive Number");
    return;
  }
  if (isNaN(coachAmountValue)) {
    alert('Please Provide a Number');
    return;
  }
  else if (isNaN(managerAmountValue)) {
    alert('Please Provide a Number');
    return;
  }

  let totalAmount = managerAmountValue + coachAmountValue + playerExpensesTotal;

  let total = document.getElementById('total');
  total.innerText = totalAmount;

})