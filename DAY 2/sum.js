function sum(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    console.log("count:", count, " +", i, "=", count + i);
    count = count + i;
  }

  console.log(count);
}

sum(5);
