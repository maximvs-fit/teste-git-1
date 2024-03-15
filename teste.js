function teste(n) {
  console.log(`antes do timeout ${n}`);
  let id = setTimeout(() => console.log(`timeout ${n}`), 2000);
  console.log(`depois do timeout ${n} - ${id}`);
}

teste(1);
teste(2);
teste(3);

clearTimeout(7);
