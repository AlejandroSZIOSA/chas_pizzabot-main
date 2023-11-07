const vegetarian = "vegetarian";
const hawaiian = "hawaiian";
const pepperoni = "pepperoni";
const PIZZA_PRICE = 80;

//DOM
const inputPizzaName = document.getElementById("pizzaName");
const inputPizzaQuantity = document.getElementById("pizzaQuantity");
const formResult = document.getElementById("result");

formResult.textContent = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;

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

formBtn.addEventListener("click", (e) => {
  /* const orderName = inputPizzaName.value;
const orderTotal = inputPizzaQuantity.value; */

  let orderName = inputPizzaName.value;

  if (checkOrderName(orderName.toLowerCase())) {
    let orderQuantity = inputPizzaQuantity.value;
    const orderTotal = totalCost(orderQuantity);

    formResult.textContent = `Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
      orderQuantity
    )} minutes`;

    /* alert(
    `Great, I'll get started on your ${orderName} Pizza right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
      orderQuantity
    )} minutes`
  ); */
  } else formResult.textContent = "Pizza Doesn't exist!";
});
