const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";
const PIZZA_PRICE = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);
let orderName = prompt("Enter the name of the pizza you want to order today?");

if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);

  const orderTotal = totalCost(orderQuantity);

  /*   alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
  ); */
  if (orderQuantity >= 1 && orderQuantity <= 2)
    alert(
      `Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. The pizzas will take 10 minutes`
    );
  else if (orderQuantity >= 3 && orderQuantity <= 5)
    alert(
      `Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. The pizzas will take 15 minutes`
    );
  else
    alert(
      `Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. The pizzas will take 20+ minutes`
    );
} else alert("Pizza Doesn't exist!");

function checkOrderName(orderName) {
  orderName = orderName.toLocaleLowerCase();
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * PIZZA_PRICE;
}

/* function cookingTime(orderQuantity){


} */
