const transactions = [
  { type: "deposit", amount: 150 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 80 }
];

const finalBalance = transactions.reduce((accumulator, transaction) => {
  if (transaction.type === "deposit") {
    return accumulator + transaction.amount;
  } else if (transaction.type === "withdrawal") {
    return accumulator - transaction.amount;
  }
  return accumulator;
}, 0);

console.log(finalBalance);