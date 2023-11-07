const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";
const PIZZA_PRICE = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);
let orderName = prompt("Enter the name of the pizza you want to order today?");

if (checkOrderName(orderName.toLowerCase())) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);

  const orderTotal = totalCost(orderQuantity);

  alert(
    `Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
      orderQuantity
    )} minutes`
  );
} else alert("Pizza Doesn't exist!");

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * PIZZA_PRICE;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) return 10;
  else if (orderQuantity >= 3 && orderQuantity <= 5) return 15;
  else return 20;
}
