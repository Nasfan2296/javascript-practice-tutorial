// =====================
// SELECT ELEMENTS
// =====================
const balanceEl = document.querySelector(".balance-number");
const incomeEl = document.querySelector(".number--income");
const expensesEl = document.querySelector(".number--expenses");
const form = document.querySelector(".form");
const descriptionInput = document.querySelector(".input--description");
const amountInput = document.querySelector(".input--amount");
const transactionsList = document.querySelector(".transactions");

// =====================
// STATE
// =====================
let transactions = [];

// =====================
// FUNCTIONS
// =====================

// Generate unique ID
function generateID() {
  return Math.floor(Math.random() * 1000000);
}

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (description === "" || isNaN(amount) || amount === 0) {
    alert("Please enter a valid description and amount");
    return;
  }

  const transaction = {
    id: generateID(),
    description,
    amount,
  };

  transactions.push(transaction);
  addTransactionDOM(transaction);
  updateBalance();
  form.reset();
}

// Add transaction to DOM
function addTransactionDOM(transaction) {
  const typeClass = transaction.amount > 0 ? "transaction--income" : "transaction--expense";
  const sign = transaction.amount > 0 ? "+" : "-";

  const li = document.createElement("li");
  li.classList.add("transaction", typeClass);
  li.innerHTML = `
    <span class="transaction__text">${transaction.description}</span>
    <span class="transaction__amount">${sign}${Math.abs(transaction.amount)}</span>
    <button class="transaction__btn">X</button>
  `;

  // Delete transaction event
  li.querySelector(".transaction__btn").addEventListener("click", () => {
    deleteTransaction(transaction.id, li);
  });

  transactionsList.appendChild(li);
}

// Delete transaction
function deleteTransaction(id, element) {
  transactions = transactions.filter((t) => t.id !== id);
  element.remove();
  updateBalance();
}

// Update balance, income, expenses
function updateBalance() {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  const income = amounts.filter((amt) => amt > 0).reduce((acc, item) => acc + item, 0);
  const expense = amounts.filter((amt) => amt < 0).reduce((acc, item) => acc + item, 0);

  balanceEl.textContent = total;
  incomeEl.textContent = income;
  expensesEl.textContent = Math.abs(expense);
}

// =====================
// EVENT LISTENER
// =====================
form.addEventListener("submit", addTransaction);
